import { supabase } from './supabase.js';

const MAX_EDGE = 1568; // longest side sent to the model; larger images only cost more
const MAX_IMAGES = 4;

/** Downscales and re-encodes an image Blob/File to JPEG, returns { media_type, data(base64) }. */
async function toImagePart(blob) {
  const url = URL.createObjectURL(blob);
  try {
    const img = await new Promise((ok, ko) => {
      const i = new Image();
      i.onload = () => ok(i);
      i.onerror = () => ko(new Error('No se pudo leer la imagen'));
      i.src = url;
    });
    const scale = Math.min(1, MAX_EDGE / Math.max(img.naturalWidth, img.naturalHeight));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(img.naturalWidth * scale);
    canvas.height = Math.round(img.naturalHeight * scale);
    canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
    return { media_type: 'image/jpeg', data: dataUrl.slice(dataUrl.indexOf(',') + 1) };
  } finally {
    URL.revokeObjectURL(url);
  }
}

async function errorMessage(error) {
  try {
    const body = await error.context?.json();
    if (body?.message) return body.message;
  } catch {
    /* not a JSON error body */
  }
  return 'La IA no está disponible ahora. Inténtalo en un rato.';
}

/** Tags each request with the legacy feature that made it, for cost tracking in ai_usage. */
const FEATURES = [
  [/^Actúa como un dietista/, 'food_estimate'],
  [/^Eres nutricionista/, 'next_meal'],
  [/^Eres chef/, 'chef'],
  [/^Actúa como entrenador personal/, 'progress_photo'],
  [/^Eres entrenador personal/, 'measurements'],
];
const featureOf = (prompt) => FEATURES.find(([re]) => re.test(prompt))?.[1] ?? 'other';

/**
 * Implements the claude.ai `sample` capability as used by the legacy code:
 *   const obj = await SM.json(prompt, { modelTier: 'default'|'quick', images?: Blob[] })
 * via the `ai` Supabase Edge Function (the API key never reaches the device).
 * Throws on failure; the legacy callers catch and show their own message.
 */
export const ai = {
  async json(prompt, opts = {}) {
    const images = await Promise.all((opts.images || []).slice(0, MAX_IMAGES).map(toImagePart));
    const { data, error } = await supabase.functions.invoke('ai', {
      body: { prompt, tier: opts.modelTier === 'quick' ? 'quick' : 'default', feature: featureOf(prompt), images },
    });
    if (error || !data?.ok) {
      const msg = error ? await errorMessage(error) : data?.message || 'Respuesta de IA no válida.';
      // Legacy callers show generic texts; surface specific ones (e.g. daily quota) as a toast.
      if (error?.context?.status === 429 && typeof window.qt === 'function') window.qt(msg);
      throw new Error(msg);
    }
    return data.data;
  },
};
