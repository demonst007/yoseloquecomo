import './food-scan.css';
import { scanCode, parseScanned } from './scan.js';
import { lookupProduct } from './openfoodfacts.js';

const LABEL = '📷 Escanear código de barras';
const $ = (id) => document.getElementById(id);
const toast = (m) => window.__legacy?.toast(m);
const setVal = (id, v) => {
  const el = $(id);
  if (el) el.value = v == null ? '' : String(v).replace('.', ',');
};

/**
 * Fills the legacy manual-entry form ("Introducir a mano") with the product's
 * values per 100 g and opens it, so the user only types the grams and taps the
 * legacy "Añadir" button (addF() already supports "Los valores son por 100 g").
 */
function fillForm(food) {
  const man = $('man');
  if (!man) return;
  man.open = true;
  setVal('fn', food.name || `Producto ${food.code}`);
  setVal('fk', food.per100.k);
  setVal('fp', food.per100.p);
  setVal('fh', food.per100.h);
  setVal('fg', food.per100.g);
  setVal('fgr', food.serving);
  const unit = $('fu');
  if (unit) unit.value = '100';
  man.scrollIntoView({ behavior: 'smooth', block: 'center' });
  setTimeout(() => $('fgr')?.focus(), 400);
}

async function onScan(btn) {
  btn.disabled = true;
  try {
    const raw = await scanCode();
    if (!raw) return;
    const parsed = parseScanned(raw);
    if (!parsed.code) {
      toast('Ese código no es de un producto de alimentación.');
      return;
    }
    btn.textContent = '🔎 Buscando producto…';
    const food = await lookupProduct(parsed.code);
    if (!food) {
      fillForm({ code: parsed.code, name: '', per100: {}, serving: null });
      toast('No encuentro ese producto: mira la tabla nutricional y rellénalo a mano (por 100 g).');
      return;
    }
    fillForm(food);
    const missing = Object.values(food.per100).some((v) => v == null);
    toast(
      missing
        ? `${food.name || 'Producto'}: faltan datos, complétalos con la etiqueta.`
        : `✅ ${food.name}: pon los gramos y pulsa Añadir.`,
    );
  } catch (e) {
    toast(e?.message?.startsWith('Sin permiso') ? e.message : 'No he podido leer el código. Inténtalo de nuevo.');
    console.warn('scan', e);
  } finally {
    btn.disabled = false;
    btn.textContent = LABEL;
  }
}

function inject() {
  const search = $('fdq');
  if (!search || $('scan-btn')) return;
  const btn = document.createElement('button');
  btn.id = 'scan-btn';
  btn.type = 'button';
  btn.className = 'g';
  btn.textContent = LABEL;
  btn.onclick = () => onScan(btn);
  // After the search block (input + results list), not between them.
  search.parentElement.insertAdjacentElement('afterend', btn);
}

/** Adds the scan button to the Diet tab's "Añadir comida" card after each render. */
export function installFoodScan() {
  const original = window.dieta;
  if (typeof original !== 'function') return;
  window.dieta = function (...args) {
    const r = original.apply(this, args);
    inject();
    return r;
  };
  inject();
}
