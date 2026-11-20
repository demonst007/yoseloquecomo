#!/usr/bin/env node
/**
 * One-off migration tool: splits reference/original.html (the single-file app
 * that ran inside claude.ai) into:
 *   - index.html             HTML shell, every inline block replaced IN PLACE by
 *                            an external <script>/<link> so execution order and
 *                            CSS cascade order are identical to the original.
 *   - src/legacy/NN-*.js|css verbatim code of each block (classic scripts).
 *   - public/img, public/icons  embedded base64 images as real files.
 *   - public/manifest.webmanifest  replaces the runtime blob-manifest script.
 *
 * Usage: node tools/extract-legacy.mjs [--force]
 * It refuses to overwrite an existing index.html unless --force is passed,
 * because after the first run index.html and src/legacy are edited by hand.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'reference/original.html');
const OUT_HTML = path.join(ROOT, 'index.html');
const LEGACY = path.join(ROOT, 'src/legacy');
const PUB = path.join(ROOT, 'public');

if (fs.existsSync(OUT_HTML) && !process.argv.includes('--force')) {
  console.error('index.html ya existe. Usa --force para regenerarlo (perderás cambios manuales).');
  process.exit(1);
}

let html = fs.readFileSync(SRC, 'utf8');

// ---------------------------------------------------------------- images
// Names in order of first appearance in the original file.
const IMAGE_NAMES = [
  'icons/apple-touch-icon',
  'icons/icon-192',
  'icons/icon-512',
  'icons/icon-512-maskable',
  'icons/favicon',
  'img/logo',
  'img/watermark-b',
  'img/watermark-u',
];
const EXT = { 'image/webp': 'webp', 'image/jpeg': 'jpg', 'image/png': 'png' };
const byHash = new Map();
let imgIndex = 0;
html = html.replace(/data:(image\/[a-z+]+);base64,([A-Za-z0-9+/=]+)/g, (_, mime, b64) => {
  const hash = crypto.createHash('sha1').update(b64).digest('hex');
  if (!byHash.has(hash)) {
    const base = IMAGE_NAMES[imgIndex] ?? `img/asset-${imgIndex}`;
    imgIndex++;
    const rel = `${base}.${EXT[mime] ?? 'bin'}`;
    fs.mkdirSync(path.dirname(path.join(PUB, rel)), { recursive: true });
    fs.writeFileSync(path.join(PUB, rel), Buffer.from(b64, 'base64'));
    byHash.set(hash, '/' + rel);
  }
  return byHash.get(hash);
});
if (imgIndex !== IMAGE_NAMES.length) {
  console.warn(`Aviso: se esperaban ${IMAGE_NAMES.length} imágenes y hay ${imgIndex}. Revisa los nombres.`);
}

// ---------------------------------------------------------------- blocks
fs.rmSync(LEGACY, { recursive: true, force: true });
fs.mkdirSync(LEGACY, { recursive: true });

const out = [];
let pos = 0;
let n = 0;
const openRe = /<(script|style)\b([^>]*)>/gi;
let m;
while ((m = openRe.exec(html))) {
  const [tag, kind, attrs] = m;
  const close = `</${kind.toLowerCase()}>`;
  const start = m.index + tag.length;
  const end = html.toLowerCase().indexOf(close, start);
  if (end < 0) throw new Error(`Bloque <${kind}> sin cerrar en ${m.index}`);
  const body = html.slice(start, end);
  out.push(html.slice(pos, m.index));
  pos = end + close.length;
  openRe.lastIndex = pos;

  const id = (attrs.match(/\bid="([^"]+)"/) || [])[1];
  if (/src=/.test(attrs)) throw new Error('Script externo inesperado: ' + tag);

  // The PWA manifest is generated at runtime from a blob in the original.
  if (kind === 'script' && body.includes('application/manifest+json')) {
    out.push('<link rel="manifest" href="/manifest.webmanifest">');
    continue;
  }
  if (!body.trim()) continue; // empty blocks

  n++;
  const nn = String(n).padStart(2, '0');
  const label = id || (kind === 'script' ? (body.length > 100_000 ? 'app' : 'patch') : 'styles');
  const file = `${nn}-${label}.${kind === 'script' ? 'js' : 'css'}`;
  const header =
    kind === 'script'
      ? `/* Legacy block ${nn}${id ? ` (id="${id}")` : ''}, extracted verbatim from reference/original.html. Classic script: shares global scope with the other legacy blocks. */\n`
      : `/* Legacy block ${nn}${id ? ` (id="${id}")` : ''}, extracted verbatim from reference/original.html. */\n`;
  fs.writeFileSync(path.join(LEGACY, file), header + body.trim() + '\n');
  const idAttr = id ? ` id="${id}"` : '';
  out.push(
    kind === 'script'
      ? `<script${idAttr} src="/legacy/${file}" data-legacy vite-ignore></script>`
      : `<link${idAttr} rel="stylesheet" href="/legacy/${file}" data-legacy vite-ignore>`,
  );
}
out.push(html.slice(pos));

// Put each tag on its own line for readable diffs.
let shell = out.join('').replace(/(<(?:script|link)[^>]*data-legacy[^>]*>(?:<\/script>)?)/g, '\n$1\n');
shell = shell.replace(/\n{2,}/g, '\n');
fs.writeFileSync(OUT_HTML, shell);

// ---------------------------------------------------------------- manifest
const manifest = {
  name: 'yoseloquecomo',
  short_name: 'yoseloquecomo',
  description: 'Dieta, peso, gimnasio y semana',
  id: '/',
  start_url: '/',
  scope: '/',
  display: 'standalone',
  orientation: 'portrait',
  background_color: '#0F1626',
  theme_color: '#2745D6',
  lang: 'es',
  icons: [
    { src: '/icons/icon-192.webp', sizes: '192x192', type: 'image/webp', purpose: 'any' },
    { src: '/icons/icon-512.webp', sizes: '512x512', type: 'image/webp', purpose: 'any' },
    { src: '/icons/icon-512-maskable.webp', sizes: '512x512', type: 'image/webp', purpose: 'maskable' },
  ],
};
fs.writeFileSync(path.join(PUB, 'manifest.webmanifest'), JSON.stringify(manifest, null, 2) + '\n');

console.log(`OK: ${n} bloques en src/legacy, ${imgIndex} imágenes, index.html generado.`);
