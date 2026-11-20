// CORS helpers shared by all edge functions.
//
// Allowed origins come from the ALLOWED_ORIGINS env var (comma-separated).
// Use "*" to allow any origin (not recommended in production).
// When unset, defaults cover local Vite dev and Capacitor WebViews.

const DEFAULT_ALLOWED_ORIGINS = [
  "http://localhost:5173", // Vite dev server
  "capacitor://localhost", // Capacitor iOS WebView
  "https://localhost", // Capacitor Android WebView (androidScheme "https", default)
  "http://localhost", // Capacitor Android WebView with androidScheme "http"
];

function allowedOrigins(): string[] {
  const raw = Deno.env.get("ALLOWED_ORIGINS");
  if (!raw || !raw.trim()) return DEFAULT_ALLOWED_ORIGINS;
  return raw
    .split(",")
    .map((o) => o.trim().replace(/\/+$/, ""))
    .filter(Boolean);
}

export function corsHeaders(req: Request): Record<string, string> {
  const headers: Record<string, string> = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
  const origin = req.headers.get("Origin");
  const allowed = allowedOrigins();
  if (allowed.includes("*")) {
    headers["Access-Control-Allow-Origin"] = origin ?? "*";
  } else if (origin && allowed.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }
  // Disallowed origins get no Access-Control-Allow-Origin header, so the
  // browser blocks the response. Native/non-browser clients are unaffected.
  return headers;
}

/** Returns a preflight response for OPTIONS requests, or null otherwise. */
export function handlePreflight(req: Request): Response | null {
  if (req.method !== "OPTIONS") return null;
  return new Response(null, { status: 204, headers: corsHeaders(req) });
}
