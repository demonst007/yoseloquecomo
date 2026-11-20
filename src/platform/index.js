import { supabase } from './supabase.js';
import { authReady, getUser } from './auth.js';
import { createLegacyDb } from './db.js';
import { ai } from './ai.js';
import { downloads } from './downloads.js';

const LOCAL_ONLY = 'local-only';

/**
 * Capabilities the legacy code requests through `claude.use(name)`.
 * Unavailable ones resolve to null (or reject in local-only mode, which makes
 * the legacy sync show "Solo en este móvil", as it did outside claude.ai);
 * the legacy code already handles both: it hides AI buttons, keeps data on the device...
 */
const capabilities = {
  async db() {
    if (!supabase) throw new Error(LOCAL_ONLY);
    await authReady;
    const user = getUser();
    return user ? createLegacyDb(user.id) : null;
  },
  async user() {
    if (!supabase) throw new Error(LOCAL_ONLY);
    await authReady;
    return { id: async () => getUser()?.id ?? null };
  },
  async sample() {
    return supabase ? ai : null;
  },
  async downloads() {
    return downloads;
  },
};

export function use(name) {
  const cap = capabilities[name];
  return cap ? cap() : Promise.reject(new Error(`Capacidad desconocida: ${name}`));
}

/**
 * Replaces the bootstrap `window.claude` defined inline in index.html (which
 * only queues calls made while the HTML is still parsing) and answers the
 * queued requests.
 */
export function installClaudeShim() {
  const queued = window.__platformQ || [];
  window.__platformQ = null;
  window.claude = { use };
  for (const [name, resolve, reject] of queued) use(name).then(resolve, reject);
}
