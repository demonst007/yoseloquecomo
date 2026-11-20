import { supabase } from '../platform/supabase.js';
import { getUser, signOut } from '../platform/auth.js';
import { createLegacyDb } from '../platform/db.js';

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

/** Uploads the current state right away (legacy push() is debounced). */
async function flush() {
  const user = getUser();
  const S = window.__legacy?.getState();
  if (!user || !S) return;
  const ref = createLegacyDb(user.id).doc(`data/users/${user.id}/plan`);
  await ref.set({ j: JSON.stringify({ ...S, bf: [] }), t: S.ts || Date.now() });
}

function clearLocalData() {
  const k = window.__legacy?.storageKey || 'plan1';
  try {
    localStorage.removeItem(k);
    localStorage.removeItem(k + '_bak');
  } catch {
    /* storage unavailable */
  }
}

async function logout() {
  if (!confirm('¿Cerrar sesión en este dispositivo? Tus datos quedan guardados en tu cuenta.')) return;
  try {
    await flush();
  } catch {
    if (!confirm('No se han podido subir los últimos cambios. ¿Cerrar sesión igualmente?')) return;
  }
  clearLocalData();
  await signOut();
  location.reload();
}

async function deleteAccount() {
  const word = prompt('Esto borra tu cuenta y TODOS tus datos para siempre. Escribe BORRAR para confirmar.');
  if (word?.trim().toUpperCase() !== 'BORRAR') return;
  const { error } = await supabase.functions.invoke('delete-account', { body: { confirm: true } });
  if (error) {
    alert('No se ha podido borrar la cuenta. Inténtalo más tarde.');
    return;
  }
  clearLocalData();
  await signOut().catch(() => {});
  location.reload();
}

function section() {
  const user = getUser();
  const d = document.createElement('details');
  d.className = 'acc-menu';
  if (!supabase) {
    d.innerHTML =
      '<summary>☁️ Cuenta</summary><div><div class="mut">Modo local: tus datos se guardan solo en este dispositivo.</div></div>';
    return d;
  }
  d.innerHTML = `<summary>☁️ Cuenta</summary><div>
    <div class="mut">Has entrado como <b>${esc(user?.email || '')}</b>. Tus datos se sincronizan con tu cuenta.</div>
    <div class="row" style="margin-top:10px"><button class="g" data-acc="logout">Cerrar sesión</button><button class="g" data-acc="delete" style="color:#D64545">Eliminar cuenta</button></div>
  </div>`;
  d.addEventListener('click', (e) => {
    const act = e.target.closest('[data-acc]')?.dataset.acc;
    if (act === 'logout') logout();
    if (act === 'delete') deleteAccount();
  });
  return d;
}

/** Adds a "Cuenta" section to the legacy side menu (opened by tapping the name). */
export function installAccountMenu() {
  const original = window.mnu;
  if (typeof original !== 'function') return;
  window.mnu = function (...args) {
    const r = original.apply(this, args);
    const panel = document.querySelector('#mnp .pn');
    if (panel && !panel.querySelector('.acc-menu')) {
      const footer = panel.lastElementChild; // sticky "Guardar" bar
      panel.insertBefore(section(), footer);
    }
    return r;
  };
}
