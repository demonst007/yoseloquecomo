import { createClient } from '@supabase/supabase-js';
import { Preferences } from '@capacitor/preferences';
import { SUPABASE_URL, SUPABASE_ANON_KEY, isCloudConfigured } from './config.js';
import { isNative } from './native.js';

/**
 * In the native apps the session is kept in native storage (SharedPreferences /
 * UserDefaults): the WebView's localStorage can be purged by the OS.
 */
const nativeStorage = {
  getItem: async (key) => (await Preferences.get({ key })).value,
  setItem: (key, value) => Preferences.set({ key, value }),
  removeItem: (key) => Preferences.remove({ key }),
};

/** Shared Supabase client, or null when the app runs local-only. */
export const supabase = isCloudConfigured
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        // Native apps receive the auth code through a deep link (see auth.js).
        detectSessionInUrl: !isNative,
        flowType: 'pkce',
        ...(isNative ? { storage: nativeStorage } : {}),
      },
    })
  : null;
