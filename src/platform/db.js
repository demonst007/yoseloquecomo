import { supabase } from './supabase.js';

/**
 * Implements the subset of the claude.ai `db` capability the legacy code uses:
 *
 *   const ref = db.doc('data/users/<id>/plan');
 *   const snap = await ref.get();   // { exists, data(): { j: string, t: number } }
 *   await ref.set({ j, t });        // j = JSON.stringify(S), t = S.ts
 *
 * backed by the `user_state` table (one jsonb row per user, protected by RLS).
 */
export function createLegacyDb(userId) {
  return {
    doc(path) {
      const m = /^data\/users\/([^/]+)\/plan$/.exec(path);
      if (!m || m[1] !== userId) throw new Error(`Ruta de datos no soportada: ${path}`);
      return {
        async get() {
          const { data, error } = await supabase
            .from('user_state')
            .select('data, client_ts')
            .eq('user_id', userId)
            .maybeSingle();
          if (error) throw error;
          return {
            exists: Boolean(data),
            data: () => ({ j: JSON.stringify(data?.data ?? {}), t: data?.client_ts ?? 0 }),
          };
        },
        async set({ j, t }) {
          const { error } = await supabase
            .from('user_state')
            .upsert({ user_id: userId, data: JSON.parse(j), client_ts: t || Date.now() });
          if (error) throw error;
        },
      };
    },
  };
}
