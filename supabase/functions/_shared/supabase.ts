// Supabase client helpers for edge functions.
//
// The Edge Runtime injects SUPABASE_URL, SUPABASE_ANON_KEY and
// SUPABASE_SERVICE_ROLE_KEY automatically (no need to set them as secrets).

import {
  createClient,
  type SupabaseClient,
  type User,
} from "npm:@supabase/supabase-js@2.119.0";

const clientOptions = {
  auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
};

function requireEnv(name: string): string {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Missing env var ${name}`);
  return value;
}

/** Service-role client: bypasses RLS. Use only for trusted server-side work. */
export function getServiceClient(): SupabaseClient {
  return createClient(
    requireEnv("SUPABASE_URL"),
    requireEnv("SUPABASE_SERVICE_ROLE_KEY"),
    clientOptions,
  );
}

/** Extracts the bearer token from the Authorization header. */
export function getBearerToken(req: Request): string | null {
  const header = req.headers.get("Authorization") ?? "";
  const match = header.match(/^Bearer\s+(.+)$/i);
  return match ? match[1].trim() : null;
}

/**
 * Resolves the authenticated user from the request's JWT.
 * Returns null if the token is missing, invalid or expired.
 */
export async function getUserFromRequest(req: Request): Promise<User | null> {
  const token = getBearerToken(req);
  if (!token) return null;
  // auth.getUser(token) validates the JWT against the Auth server, so any
  // project key works as the apikey; prefer the anon key when available.
  const apiKey = Deno.env.get("SUPABASE_ANON_KEY") ??
    requireEnv("SUPABASE_SERVICE_ROLE_KEY");
  const client = createClient(
    requireEnv("SUPABASE_URL"),
    apiKey,
    {
      ...clientOptions,
      global: { headers: { Authorization: `Bearer ${token}` } },
    },
  );
  const { data, error } = await client.auth.getUser(token);
  if (error || !data?.user) return null;
  return data.user;
}
