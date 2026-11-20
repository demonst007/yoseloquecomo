/** Runtime configuration, read from Vite env vars (see .env.example). */
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? '';
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

/** Without Supabase config the app runs local-only (data stays on the device, no AI). */
export const isCloudConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

/** Deep link used by the native apps to come back from e-mail / OAuth sign-in. */
export const NATIVE_AUTH_REDIRECT = 'com.yoseloquecomo.app://auth-callback';
