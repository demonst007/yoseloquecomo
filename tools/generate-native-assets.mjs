#!/usr/bin/env node
/**
 * Builds the source images @capacitor/assets needs (assets/*.png) from the
 * app's existing icons, then generates every Android/iOS icon and splash size.
 *
 *   node tools/generate-native-assets.mjs
 *
 * The originals are 512 px; replace assets/icon-only.png etc. with 1024 px
 * versions (and skip the first step) for sharper store icons.
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'assets');
const BG = '#0F1626';
fs.mkdirSync(OUT, { recursive: true });

const icon = (src) => sharp(path.join(ROOT, src)).resize(1024, 1024, { kernel: 'lanczos3' }).png();

await icon('public/icons/icon-512.webp').toFile(path.join(OUT, 'icon-only.png'));
await icon('public/icons/icon-512-maskable.webp').toFile(path.join(OUT, 'icon-foreground.png'));
await sharp({ create: { width: 1024, height: 1024, channels: 3, background: BG } })
  .png()
  .toFile(path.join(OUT, 'icon-background.png'));

const logo = await sharp(path.join(ROOT, 'public/img/logo.webp')).resize(900, 900).png().toBuffer();
for (const name of ['splash.png', 'splash-dark.png']) {
  await sharp({ create: { width: 2732, height: 2732, channels: 3, background: BG } })
    .composite([{ input: logo, gravity: 'center' }])
    .png()
    .toFile(path.join(OUT, name));
}

execSync(
  `npx capacitor-assets generate --android --ios --iconBackgroundColor "${BG}" --iconBackgroundColorDark "${BG}" --splashBackgroundColor "${BG}" --splashBackgroundColorDark "${BG}"`,
  { cwd: ROOT, stdio: 'inherit' },
);
