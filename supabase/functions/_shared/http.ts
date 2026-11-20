// JSON response helpers. Every response follows the contract:
//   success: { ok: true, ... }
//   error:   { ok: false, error: '<code>', message: '<user-facing text in Spanish>' }

import { corsHeaders } from "./cors.ts";

export function jsonResponse(
  req: Request,
  status: number,
  body: unknown,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders(req),
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export function errorResponse(
  req: Request,
  status: number,
  error: string,
  message: string,
): Response {
  return jsonResponse(req, status, { ok: false, error, message });
}

/** Common error responses with their Spanish user-facing messages. */
export const errors = {
  methodNotAllowed: (req: Request) =>
    errorResponse(req, 405, "method_not_allowed", "Método no permitido."),
  unauthorized: (req: Request) =>
    errorResponse(
      req,
      401,
      "unauthorized",
      "Tu sesión no es válida o ha caducado. Vuelve a iniciar sesión.",
    ),
  badJson: (req: Request) =>
    errorResponse(
      req,
      400,
      "bad_request",
      "La petición no es válida (JSON incorrecto).",
    ),
  serverConfig: (req: Request) =>
    errorResponse(
      req,
      500,
      "server_config",
      "El servidor no está bien configurado. Inténtalo más tarde.",
    ),
  internal: (req: Request) =>
    errorResponse(
      req,
      500,
      "internal",
      "Ha ocurrido un error inesperado. Inténtalo de nuevo.",
    ),
};
