// Edge function "delete-account": the authenticated user permanently deletes
// their own account. Required by App Store / Google Play for apps with sign-up.
//
// Steps: delete every object under "{user_id}/" in the progress-photos bucket,
// then auth.admin.deleteUser(). All public tables reference auth.users with
// ON DELETE CASCADE, so profile, state, photos metadata, push tokens and AI
// usage rows are removed by the database.
//
// Body must be { "confirm": true } to avoid accidental deletions.

import { handlePreflight } from "../_shared/cors.ts";
import { errorResponse, errors, jsonResponse } from "../_shared/http.ts";
import { getServiceClient, getUserFromRequest } from "../_shared/supabase.ts";

const BUCKETS = ["progress-photos"];
const PAGE_SIZE = 1000;

type StorageClient = ReturnType<typeof getServiceClient>["storage"];

/** Recursively lists every object path under `prefix` in a bucket. */
async function listAllPaths(
  storage: StorageClient,
  bucket: string,
  prefix: string,
): Promise<string[]> {
  const paths: string[] = [];
  let offset = 0;
  while (true) {
    const { data, error } = await storage.from(bucket).list(prefix, {
      limit: PAGE_SIZE,
      offset,
      sortBy: { column: "name", order: "asc" },
    });
    if (error) throw error;
    if (!data || data.length === 0) break;
    for (const item of data) {
      const path = `${prefix}/${item.name}`;
      // Folders are returned as entries without an id.
      if (item.id === null || item.id === undefined) {
        paths.push(...(await listAllPaths(storage, bucket, path)));
      } else {
        paths.push(path);
      }
    }
    if (data.length < PAGE_SIZE) break;
    offset += PAGE_SIZE;
  }
  return paths;
}

Deno.serve(async (req: Request): Promise<Response> => {
  const preflight = handlePreflight(req);
  if (preflight) return preflight;
  if (req.method !== "POST") return errors.methodNotAllowed(req);

  try {
    const user = await getUserFromRequest(req);
    if (!user) return errors.unauthorized(req);

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return errors.badJson(req);
    }
    if (
      body === null || typeof body !== "object" ||
      (body as Record<string, unknown>).confirm !== true
    ) {
      return errorResponse(
        req,
        400,
        "confirm_required",
        "Debes confirmar que quieres eliminar tu cuenta.",
      );
    }

    const admin = getServiceClient();

    // 1. Storage objects under "{user_id}/"
    for (const bucket of BUCKETS) {
      const paths = await listAllPaths(admin.storage, bucket, user.id);
      for (let i = 0; i < paths.length; i += PAGE_SIZE) {
        const { error } = await admin.storage
          .from(bucket)
          .remove(paths.slice(i, i + PAGE_SIZE));
        if (error) throw error;
      }
    }

    // 2. Auth user (cascades to all public tables)
    const { error: deleteError } = await admin.auth.admin.deleteUser(user.id);
    if (deleteError) throw deleteError;

    return jsonResponse(req, 200, { ok: true });
  } catch (err) {
    console.error("delete-account failed", err);
    return errorResponse(
      req,
      500,
      "delete_failed",
      "No se ha podido eliminar la cuenta. Inténtalo de nuevo o contacta con soporte.",
    );
  }
});
