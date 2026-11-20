/**
 * Parity: the migrated app must render exactly like reference/original.html
 * (the single-file app it was extracted from) for the same data and date.
 * Runs against the production build (vite preview) without Supabase config,
 * i.e. local-only mode, which is how the original behaves outside claude.ai.
 */
import fs from 'node:fs';
import path from 'node:path';
import { test, expect } from '@playwright/test';
import { sampleState, TODAY } from '../fixtures/state.js';

const ORIGINAL = fs.readFileSync(path.resolve(import.meta.dirname, '../../reference/original.html'), 'utf8');
const ORIGINAL_URL = 'http://original.test/';
const FIXED_NOW = new Date(`${TODAY}T10:30:00`);

const SCENARIOS = {
  empty: null,
  seeded: sampleState(),
};

async function open(page, which, state) {
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e.message)));
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  // External fonts are flaky in CI: block them in both apps.
  await page.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
  await page.route(ORIGINAL_URL + '**', (r) => r.fulfill({ body: ORIGINAL, contentType: 'text/html; charset=utf-8' }));
  await page.clock.setFixedTime(FIXED_NOW);
  await page.addInitScript((s) => {
    localStorage.clear();
    if (s) localStorage.setItem('plan1', JSON.stringify(s));
    Math.random = () => 0.42; // deterministic decorative randomness
  }, state);
  await page.goto(which === 'original' ? ORIGINAL_URL : '/');
  // Let start-up effects settle: deferred renders and the "new badges" confetti
  // (cele(): removed after 2.4 s), whose exact timing depends on load speed.
  await page.waitForTimeout(1500);
  // Inside claude.ai, claude.use('sample') resolves and triggers a second Diet
  // render at start-up (which can award badges). Standalone, the original skips
  // it (ReferenceError on `claude`), the migrated app does it: render once more
  // in both so they are compared in the same state.
  await page.evaluate(() => window.go(0));
  await page.waitForTimeout(3000);
  return errors;
}

/** Normalised snapshot of what the user sees in the main view. */
async function snapshot(page) {
  return page.evaluate(() => {
    const strip = (h) =>
      h
        .replace(/data:image\/[a-z]+;base64,[A-Za-z0-9+/=]+/g, 'IMG')
        .replace(/\/(img|icons)\/[a-z0-9-]+\.(webp|jpg|png)/g, 'IMG')
        .replace(/blob:[^"')\s]+/g, 'BLOB');
    return {
      main: strip(document.getElementById('v')?.innerHTML || ''),
      header: ['nm', 'fecha', 'cloud'].map((id) => document.getElementById(id)?.textContent).join('|'),
      overlays: [...document.body.children]
        .filter((e) => !['SCRIPT', 'LINK', 'STYLE', 'MAIN', 'NAV'].includes(e.tagName) && e.id !== 'auth-gate')
        .map((e) => e.tagName + '#' + e.id + '.' + e.className)
        .join('|'),
    };
  });
}

async function walk(page) {
  const out = {};
  for (const tab of [0, 1, 2, 3]) {
    await page.evaluate((i) => window.go(i), tab);
    await page.waitForTimeout(700);
    out[`tab${tab}`] = await snapshot(page);
    out[`tab${tab}-png`] = await page.screenshot({ fullPage: true, animations: 'disabled' });
  }
  await page.evaluate(() => window.mnu());
  await page.waitForTimeout(500);
  out.menu = await page.evaluate(() =>
    // The "Cuenta" section is the one intentional addition.
    [...document.querySelectorAll('#mnp .pn > :not(.acc-menu)')].map((e) => e.innerText).join('\n'),
  );
  return out;
}

for (const [name, state] of Object.entries(SCENARIOS)) {
  test(`renders like the original (${name} data)`, async ({ browser }, info) => {
    const ctxOpts = {
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 1,
      reducedMotion: 'reduce',
      locale: 'es-ES',
      timezoneId: 'Europe/Madrid',
    };
    const ctxA = await browser.newContext(ctxOpts);
    const ctxB = await browser.newContext({ ...ctxOpts, baseURL: info.project.use.baseURL });
    const a = await ctxA.newPage();
    const b = await ctxB.newPage();
    const errA = await open(a, 'original', state);
    const errB = await open(b, 'migrated', state);
    const A = await walk(a);
    const B = await walk(b);

    for (const key of Object.keys(A)) {
      if (key.endsWith('-png')) {
        if (!A[key].equals(B[key])) {
          await info.attach(`${key}-original.png`, { body: A[key], contentType: 'image/png' });
          await info.attach(`${key}-migrated.png`, { body: B[key], contentType: 'image/png' });
        }
        expect.soft(B[key].equals(A[key]), `${key} screenshot differs`).toBe(true);
      } else {
        const a = JSON.stringify(A[key]);
        const b = JSON.stringify(B[key]);
        let i = 0;
        while (i < a.length && a[i] === b[i]) i++;
        const ctx = (s) => s.slice(Math.max(0, i - 120), i + 200);
        expect.soft(b, `${key} differs at ${i}:\n  original: …${ctx(a)}…\n  migrated: …${ctx(b)}…`).toBe(a);
      }
    }
    // The original throws (caught) ReferenceErrors for `claude` outside claude.ai;
    // the migrated app must not add any new error.
    const extra = errB.filter((e) => !errA.includes(e));
    expect(extra, 'new console errors').toEqual([]);
    await ctxA.close();
    await ctxB.close();
  });
}
