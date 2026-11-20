import { App } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { supabase } from './supabase.js';
import { isNative } from './native.js';
import { NATIVE_AUTH_REDIRECT } from './config.js';

let session = null;
const listeners = new Set();

/** Resolves once the persisted session (if any) has been restored. */
export const authReady = supabase
  ? supabase.auth.getSession().then(({ data }) => (session = data.session))
  : Promise.resolve(null);

supabase?.auth.onAuthStateChange((event, next) => {
  session = next;
  for (const fn of listeners) fn(event, next);
});

// Native: e-mail links and OAuth come back as com.yoseloquecomo.app://auth-callback?code=...
if (supabase && isNative) {
  App.addListener('appUrlOpen', async ({ url }) => {
    if (!url.startsWith(NATIVE_AUTH_REDIRECT)) return;
    const params = new URL(url.replace('#', '?')).searchParams;
    const code = params.get('code');
    try {
      if (code) await supabase.auth.exchangeCodeForSession(code);
    } finally {
      Browser.close().catch(() => {});
    }
  });
}

export const getSession = () => session;
export const getUser = () => session?.user ?? null;

/** Subscribe to auth changes. Returns an unsubscribe function. */
export function onAuthChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

const redirectTo = () => (isNative ? NATIVE_AUTH_REDIRECT : location.origin + location.pathname);

function must() {
  if (!supabase) throw new Error('La nube no está configurada.');
  return supabase.auth;
}

export const signInWithPassword = (email, password) => must().signInWithPassword({ email, password });

export const signUp = (email, password, name) =>
  must().signUp({ email, password, options: { data: { name }, emailRedirectTo: redirectTo() } });

export const sendMagicLink = (email) => must().signInWithOtp({ email, options: { emailRedirectTo: redirectTo() } });

export const resetPassword = (email) => must().resetPasswordForEmail(email, { redirectTo: redirectTo() });

/** OAuth (Google, Apple). Native apps open the system browser and return via deep link. */
export async function signInWithProvider(provider) {
  const res = await must().signInWithOAuth({
    provider,
    options: { redirectTo: redirectTo(), skipBrowserRedirect: isNative },
  });
  if (isNative && res.data?.url) await Browser.open({ url: res.data.url, presentationStyle: 'popover' });
  return res;
}

export const signOut = () => must().signOut();
