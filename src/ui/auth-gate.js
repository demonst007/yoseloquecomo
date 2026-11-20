import { supabase } from '../platform/supabase.js';
import {
  authReady,
  getUser,
  onAuthChange,
  signInWithPassword,
  signUp,
  sendMagicLink,
  resetPassword,
  signInWithProvider,
} from '../platform/auth.js';

const ERRORS = {
  'Invalid login credentials': 'Email o contraseña incorrectos.',
  'Email not confirmed': 'Confirma tu email: te hemos enviado un enlace.',
  'User already registered': 'Ya existe una cuenta con ese email. Entra con tu contraseña.',
};
const errText = (e) => ERRORS[e?.message] || e?.message || 'Algo ha fallado. Inténtalo de nuevo.';

let gate = null;
let mode = 'login'; // 'login' | 'signup'

function render() {
  const signup = mode === 'signup';
  gate.innerHTML = `
    <form class="ag-card" novalidate>
      <div class="ag-logo" aria-hidden="true"></div>
      <h1 class="ag-title">yoseloquecomo</h1>
      <p class="ag-sub">${signup ? 'Crea tu cuenta para guardar tu progreso en la nube.' : 'Entra para sincronizar tu dieta, peso y gimnasio.'}</p>
      ${signup ? '<label class="ag-l">Nombre<input name="name" autocomplete="given-name" required></label>' : ''}
      <label class="ag-l">Email<input name="email" type="email" inputmode="email" autocomplete="email" required></label>
      <label class="ag-l">Contraseña<input name="password" type="password" minlength="8" autocomplete="${signup ? 'new-password' : 'current-password'}" required></label>
      <button class="ag-main" type="submit">${signup ? 'Crear cuenta' : 'Entrar'}</button>
      <div class="ag-msg" role="status" aria-live="polite"></div>
      ${signup ? '' : '<div class="ag-row"><button type="button" class="g" data-act="magic">Enviarme un enlace</button><button type="button" class="g" data-act="reset">He olvidado la contraseña</button></div>'}
      <div class="ag-sep"><span>o</span></div>
      <button type="button" class="g ag-wide" data-act="google">Continuar con Google</button>
      <button type="button" class="ag-link" data-act="toggle">${signup ? '¿Ya tienes cuenta? Entra' : '¿No tienes cuenta? Créala'}</button>
    </form>`;
}

function msg(text, ok = false) {
  const el = gate.querySelector('.ag-msg');
  el.textContent = text;
  el.classList.toggle('ok', ok);
}

async function run(btn, fn) {
  const form = gate.querySelector('form');
  const busy = [...form.querySelectorAll('button')];
  busy.forEach((b) => (b.disabled = true));
  msg('');
  try {
    await fn(new FormData(form));
  } catch (e) {
    msg(errText(e));
  } finally {
    busy.forEach((b) => (b.disabled = false));
  }
}

const requireEmail = (email) => {
  if (!/^\S+@\S+\.\S+$/.test(email)) throw new Error('Escribe un email válido.');
};

async function onSubmit(fd) {
  const email = String(fd.get('email') || '').trim();
  const password = String(fd.get('password') || '');
  requireEmail(email);
  if (password.length < 8) throw new Error('La contraseña debe tener al menos 8 caracteres.');
  if (mode === 'signup') {
    const name = String(fd.get('name') || '').trim();
    if (!name) throw new Error('Escribe tu nombre.');
    const { data, error } = await signUp(email, password, name);
    if (error) throw error;
    if (!data.session) msg('Te hemos enviado un email para confirmar la cuenta.', true);
  } else {
    const { error } = await signInWithPassword(email, password);
    if (error) throw error;
  }
}

function bind() {
  gate.addEventListener('submit', (e) => {
    e.preventDefault();
    run(e.submitter, onSubmit);
  });
  gate.addEventListener('click', (e) => {
    const act = e.target.closest('[data-act]')?.dataset.act;
    if (!act) return;
    if (act === 'toggle') {
      mode = mode === 'login' ? 'signup' : 'login';
      render();
      return;
    }
    run(e.target, async (fd) => {
      const email = String(fd.get('email') || '').trim();
      if (act === 'google') {
        const { error } = await signInWithProvider('google');
        if (error) throw error;
        return;
      }
      requireEmail(email);
      const { error } = act === 'magic' ? await sendMagicLink(email) : await resetPassword(email);
      if (error) throw error;
      msg(
        act === 'magic'
          ? 'Revisa tu email: te hemos enviado un enlace para entrar.'
          : 'Te hemos enviado un email para cambiar la contraseña.',
        true,
      );
    });
  });
}

function show() {
  if (gate) return;
  gate = document.createElement('div');
  gate.id = 'auth-gate';
  gate.setAttribute('role', 'dialog');
  gate.setAttribute('aria-modal', 'true');
  gate.setAttribute('aria-label', 'Iniciar sesión');
  document.body.append(gate);
  document.documentElement.classList.add('ag-open');
  render();
  bind();
}

function hide() {
  gate?.remove();
  gate = null;
  document.documentElement.classList.remove('ag-open');
}

/**
 * Requires an account when the cloud is configured. After sign-in, triggers the
 * legacy cloud() sync, which merges local and remote data and re-renders.
 */
export async function mountAuthGate() {
  if (!supabase) return;
  await authReady;
  let userId = getUser()?.id ?? null;
  if (!userId) show();

  onAuthChange((event, session) => {
    const next = session?.user?.id ?? null;
    if (next && next !== userId) {
      userId = next;
      hide();
      window.__legacy?.cloud();
    } else if (!next && userId) {
      userId = null;
      location.reload(); // signed out elsewhere (or session revoked)
    }
  });
}
