import { supabase } from './supabase.js';

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

export const getSession = () => session;
export const getUser = () => session?.user ?? null;

/** Subscribe to auth changes. Returns an unsubscribe function. */
export function onAuthChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

const redirectTo = () => location.origin + location.pathname;

function must() {
  if (!supabase) throw new Error('La nube no está configurada.');
  return supabase.auth;
}

export const signInWithPassword = (email, password) => must().signInWithPassword({ email, password });

export const signUp = (email, password, name) =>
  must().signUp({ email, password, options: { data: { name }, emailRedirectTo: redirectTo() } });

export const sendMagicLink = (email) => must().signInWithOtp({ email, options: { emailRedirectTo: redirectTo() } });

export const resetPassword = (email) => must().resetPasswordForEmail(email, { redirectTo: redirectTo() });

export const signInWithProvider = (provider) =>
  must().signInWithOAuth({ provider, options: { redirectTo: redirectTo() } });

export const signOut = () => must().signOut();
