// Edge function "ai": authenticated proxy to the Claude API that always
// returns a parsed JSON object. See supabase/README.md for the contract.
//
// Secrets / env:
//   ANTHROPIC_API_KEY   (required)
//   AI_DAILY_LIMIT      (optional, default 40 requests per user per UTC day)
//   AI_MODEL_DEFAULT    (optional, default "claude-sonnet-5-5")
//   AI_MODEL_QUICK      (optional, default "claude-haiku-5-5")
//   AI_EFFORT_DEFAULT   (optional, default "medium")
//   AI_EFFORT_QUICK     (optional, default "low")
//   ALLOWED_ORIGINS     (optional, see _shared/cors.ts)

import Anthropic from "npm:@anthropic-ai/sdk@1.5.0";
import { handlePreflight } from "../_shared/cors.ts";
import { errorResponse, errors, jsonResponse } from "../_shared/http.ts";
import { getServiceClient, getUserFromRequest } from "../_shared/supabase.ts";
import { extractJsonObject } from "./parse.ts";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

type Tier = "default" | "quick";
type Effort = "low" | "medium" | "high" | "xhigh" | "max";
type ImageMediaType = "image/jpeg" | "image/png" | "image/webp";

const MODELS: Record<Tier, string> = {
  default: Deno.env.get("AI_MODEL_DEFAULT") || "claude-sonnet-5-5",
  quick: Deno.env.get("AI_MODEL_QUICK") || "claude-haiku-5-5",
};

const EFFORTS: Record<Tier, Effort> = {
  default: parseEffort(Deno.env.get("AI_EFFORT_DEFAULT"), "medium"),
  quick: parseEffort(Deno.env.get("AI_EFFORT_QUICK"), "low"),
};

const DAILY_LIMIT = parsePositiveInt(Deno.env.get("AI_DAILY_LIMIT"), 40);

const MAX_PROMPT_CHARS = 20_000;
const MAX_IMAGES = 4;
const MAX_IMAGE_BYTES = 5 * 1024 * 1024; // decoded size, matches the API per-image limit
const MAX_BODY_BYTES = 32 * 1024 * 1024;
const MAX_OUTPUT_TOKENS = 16_000; // includes adaptive thinking tokens
const ALLOWED_MEDIA_TYPES: ReadonlySet<string> = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
]);

// Models that accept the server-side refusal fallback (`fallbacks: "default"`).
const FALLBACK_MODELS: ReadonlySet<string> = new Set([
  "claude-sonnet-5-5",
  "claude-opus-5-5",
  "claude-opus-5",
  "claude-fable-5-1",
  "claude-fable-5-2",
]);

const SYSTEM_PROMPT =
  "Eres el asistente de nutrición y entrenamiento de la app «yoseloquecomo». " +
  "Responde SIEMPRE y ÚNICAMENTE con un objeto JSON válido que siga exactamente " +
  "la estructura pedida en el mensaje del usuario: sin texto antes ni después, " +
  "sin bloques de código Markdown y sin comentarios. Los textos dentro del JSON, " +
  "en español.";

const QUOTA_MESSAGE =
  "Has llegado al límite diario de consultas de IA. Vuelve mañana.";

function parseEffort(value: string | undefined, fallback: Effort): Effort {
  const allowed: Effort[] = ["low", "medium", "high", "xhigh", "max"];
  return allowed.includes(value as Effort) ? (value as Effort) : fallback;
}

function parsePositiveInt(value: string | undefined, fallback: number): number {
  const n = Number.parseInt(value ?? "", 10);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

// ---------------------------------------------------------------------------
// Request validation
// ---------------------------------------------------------------------------

interface ValidImage {
  media_type: ImageMediaType;
  data: string;
}

interface ValidRequest {
  prompt: string;
  tier: Tier;
  feature: string;
  images: ValidImage[];
  schema: Record<string, unknown> | null;
}

type Validation =
  | { ok: true; value: ValidRequest }
  | { ok: false; error: string; message: string };

const BASE64_RE = /^[A-Za-z0-9+/]+={0,2}$/;

function decodedBase64Size(b64: string): number {
  const padding = b64.endsWith("==") ? 2 : b64.endsWith("=") ? 1 : 0;
  return Math.floor((b64.length * 3) / 4) - padding;
}

function validate(body: unknown): Validation {
  const fail = (error: string, message: string): Validation => ({
    ok: false,
    error,
    message,
  });

  if (body === null || typeof body !== "object" || Array.isArray(body)) {
    return fail("bad_request", "La petición no es válida.");
  }
  const b = body as Record<string, unknown>;

  if (typeof b.prompt !== "string" || !b.prompt.trim()) {
    return fail("bad_prompt", "Falta el texto de la consulta.");
  }
  if (b.prompt.length > MAX_PROMPT_CHARS) {
    return fail(
      "prompt_too_long",
      `La consulta es demasiado larga (máximo ${MAX_PROMPT_CHARS} caracteres).`,
    );
  }

  let tier: Tier = "default";
  if (b.tier !== undefined && b.tier !== null) {
    if (b.tier !== "default" && b.tier !== "quick") {
      return fail("bad_tier", "El tipo de modelo solicitado no es válido.");
    }
    tier = b.tier;
  }

  let feature = "unknown";
  if (b.feature !== undefined && b.feature !== null) {
    if (typeof b.feature !== "string" || !/^[a-z0-9_.-]{1,64}$/i.test(b.feature)) {
      return fail("bad_feature", "El identificador de la función no es válido.");
    }
    feature = b.feature;
  }

  const images: ValidImage[] = [];
  if (b.images !== undefined && b.images !== null) {
    if (!Array.isArray(b.images)) {
      return fail("bad_images", "El formato de las imágenes no es válido.");
    }
    if (b.images.length > MAX_IMAGES) {
      return fail(
        "too_many_images",
        `Puedes enviar como máximo ${MAX_IMAGES} imágenes por consulta.`,
      );
    }
    for (const img of b.images) {
      if (img === null || typeof img !== "object") {
        return fail("bad_images", "El formato de las imágenes no es válido.");
      }
      const { media_type, data } = img as Record<string, unknown>;
      if (typeof media_type !== "string" || !ALLOWED_MEDIA_TYPES.has(media_type)) {
        return fail(
          "bad_image_type",
          "Formato de imagen no soportado. Usa JPEG, PNG o WebP.",
        );
      }
      if (typeof data !== "string" || !data) {
        return fail("bad_images", "El formato de las imágenes no es válido.");
      }
      // Be lenient with a leftover "data:...;base64," prefix and whitespace.
      const clean = data.replace(/^data:[^;,]+;base64,/, "").replace(/\s+/g, "");
      if (!BASE64_RE.test(clean)) {
        return fail("bad_images", "Una de las imágenes no es válida.");
      }
      if (decodedBase64Size(clean) > MAX_IMAGE_BYTES) {
        return fail(
          "image_too_large",
          "Una de las imágenes es demasiado grande (máximo 5 MB). Redúcela e inténtalo de nuevo.",
        );
      }
      images.push({ media_type: media_type as ImageMediaType, data: clean });
    }
  }

  let schema: Record<string, unknown> | null = null;
  if (b.schema !== undefined && b.schema !== null) {
    if (typeof b.schema !== "object" || Array.isArray(b.schema)) {
      return fail("bad_schema", "El esquema JSON no es válido.");
    }
    schema = b.schema as Record<string, unknown>;
  }

  return { ok: true, value: { prompt: b.prompt, tier, feature, images, schema } };
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------

function startOfUtcDay(now = new Date()): string {
  return new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  ).toISOString();
}

let anthropic: Anthropic | null = null;
function getAnthropic(): Anthropic | null {
  const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
  if (!apiKey) return null;
  // Keep total time (timeout x attempts) inside the Edge Function wall-clock limit.
  anthropic ??= new Anthropic({ apiKey, timeout: 70_000, maxRetries: 1 });
  return anthropic;
}

Deno.serve(async (req: Request): Promise<Response> => {
  const preflight = handlePreflight(req);
  if (preflight) return preflight;
  if (req.method !== "POST") return errors.methodNotAllowed(req);

  try {
    // 1. Auth
    const user = await getUserFromRequest(req);
    if (!user) return errors.unauthorized(req);

    // 2. Body + validation
    const contentLength = Number(req.headers.get("Content-Length") ?? "0");
    if (contentLength > MAX_BODY_BYTES) {
      return errorResponse(
        req,
        413,
        "too_large",
        "La petición es demasiado grande. Reduce el tamaño de las imágenes.",
      );
    }
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return errors.badJson(req);
    }
    const parsed = validate(body);
    if (!parsed.ok) return errorResponse(req, 400, parsed.error, parsed.message);
    const { prompt, tier, feature, images, schema } = parsed.value;

    const client = getAnthropic();
    if (!client) {
      console.error("ANTHROPIC_API_KEY is not set");
      return errors.serverConfig(req);
    }

    // 3. Daily quota (UTC day)
    const admin = getServiceClient();
    const { count, error: countError } = await admin
      .from("ai_usage")
      .select("id", { count: "exact", head: true })
      .eq("user_id", user.id)
      .gte("created_at", startOfUtcDay());
    if (countError) {
      console.error("ai_usage count failed", countError);
      return errors.internal(req);
    }
    const used = count ?? 0;
    if (used >= DAILY_LIMIT) {
      return errorResponse(req, 429, "quota", QUOTA_MESSAGE);
    }

    // 4. Call Claude
    const model = MODELS[tier];
    const content: Anthropic.Beta.BetaContentBlockParam[] = [
      ...images.map((img): Anthropic.Beta.BetaImageBlockParam => ({
        type: "image",
        source: { type: "base64", media_type: img.media_type, data: img.data },
      })),
      { type: "text", text: prompt },
    ];

    const params: Anthropic.Beta.MessageCreateParamsNonStreaming = {
      model,
      max_tokens: MAX_OUTPUT_TOKENS,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content }],
      output_config: {
        effort: EFFORTS[tier],
        // Structured outputs: when the caller sends a JSON Schema, the API
        // guarantees the response matches it. Otherwise we rely on the system
        // prompt plus robust parsing below.
        ...(schema ? { format: { type: "json_schema" as const, schema } } : {}),
      },
    };
    if (FALLBACK_MODELS.has(model)) {
      // Server-side fallback: if the model declines (safety classifier), the
      // API retries on a suitable fallback model within the same call.
      params.betas = ["server-side-fallback-2026-07-01"];
      params.fallbacks = "default";
    }

    let message: Anthropic.Beta.BetaMessage;
    try {
      message = await client.beta.messages.create(params);
    } catch (err) {
      return anthropicErrorResponse(req, err);
    }

    // 5. Log usage (tokens were spent even if the output turns out unusable)
    const { error: logError } = await admin.from("ai_usage").insert({
      user_id: user.id,
      feature,
      tier,
      model: message.model,
      input_tokens: (message.usage.input_tokens ?? 0) +
        (message.usage.cache_creation_input_tokens ?? 0) +
        (message.usage.cache_read_input_tokens ?? 0),
      output_tokens: message.usage.output_tokens ?? 0,
    });
    if (logError) console.error("ai_usage insert failed", logError);

    // 6. Parse
    if (message.stop_reason === "refusal") {
      return errorResponse(
        req,
        502,
        "ai_refused",
        "La IA no ha podido responder a esta consulta. Prueba a reformularla.",
      );
    }
    // Responses can start with thinking blocks: read text blocks by type.
    const text = message.content
      .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === "text")
      .map((b) => b.text)
      .join("");
    const data = extractJsonObject(text);
    if (!data) {
      console.error("Could not parse JSON from model output", {
        stop_reason: message.stop_reason,
        preview: text.slice(0, 300),
      });
      return errorResponse(
        req,
        502,
        "ai_bad_output",
        "La IA ha devuelto una respuesta que no se puede interpretar. Inténtalo de nuevo.",
      );
    }

    return jsonResponse(req, 200, {
      ok: true,
      data,
      meta: {
        model: message.model,
        tier,
        remaining: Math.max(0, DAILY_LIMIT - used - 1),
      },
    });
  } catch (err) {
    console.error("Unhandled error in ai function", err);
    return errors.internal(req);
  }
});

function anthropicErrorResponse(req: Request, err: unknown): Response {
  console.error("Anthropic API error", err);
  if (err instanceof Anthropic.BadRequestError) {
    return errorResponse(
      req,
      400,
      "ai_bad_request",
      "La IA no ha aceptado la petición. Revisa las imágenes o el texto e inténtalo de nuevo.",
    );
  }
  if (
    err instanceof Anthropic.AuthenticationError ||
    err instanceof Anthropic.PermissionDeniedError
  ) {
    return errors.serverConfig(req);
  }
  if (err instanceof Anthropic.APIConnectionTimeoutError) {
    return errorResponse(
      req,
      504,
      "ai_timeout",
      "La IA ha tardado demasiado en responder. Inténtalo de nuevo.",
    );
  }
  if (err instanceof Anthropic.RateLimitError) {
    return errorResponse(
      req,
      502,
      "ai_busy",
      "El servicio de IA está saturado ahora mismo. Inténtalo en unos minutos.",
    );
  }
  return errorResponse(
    req,
    502,
    "ai_unavailable",
    "El servicio de IA no está disponible ahora mismo. Inténtalo más tarde.",
  );
}
