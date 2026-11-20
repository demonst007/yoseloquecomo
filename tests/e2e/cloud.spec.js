/**
 * Cloud mode: built with a (fake) Supabase URL, with the Supabase HTTP API
 * mocked. Checks the platform layer that replaces claude.ai: sign-in gate,
 * sync of the user's state (user_state table) and the AI proxy contract.
 */
import { test, expect } from '@playwright/test';

const CLOUD = 'http://localhost:4174';
const USER = { id: '11111111-2222-3333-4444-555555555555', email: 'javi@example.com', aud: 'authenticated', role: 'authenticated' };

const b64url = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
const jwt = () =>
  `${b64url({ alg: 'HS256', typ: 'JWT' })}.${b64url({ sub: USER.id, email: USER.email, role: 'authenticated', aud: 'authenticated', exp: Math.floor(Date.now() / 1000) + 3600 })}.sig`;

/** Mocks the Supabase endpoints the app uses and records the calls. */
async function mockSupabase(page, { remoteState = null } = {}) {
  const calls = { upserts: [], ai: [] };
  await page.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
  await page.route('https://fake-project.supabase.co/**', async (route) => {
    const req = route.request();
    const url = new URL(req.url());
    const json = (status, body) =>
      route.fulfill({ status, contentType: 'application/json', headers: { 'access-control-allow-origin': '*' }, body: JSON.stringify(body) });
    if (req.method() === 'OPTIONS')
      return route.fulfill({ status: 200, headers: { 'access-control-allow-origin': '*', 'access-control-allow-headers': '*', 'access-control-allow-methods': '*' } });
    if (url.pathname === '/auth/v1/token') {
      const { password } = req.postDataJSON();
      if (password !== 'correct-horse')
        return json(400, { error: 'invalid_grant', error_description: 'Invalid login credentials', msg: 'Invalid login credentials', code: 'invalid_credentials' });
      return json(200, { access_token: jwt(), token_type: 'bearer', expires_in: 3600, expires_at: Math.floor(Date.now() / 1000) + 3600, refresh_token: 'r', user: USER });
    }
    if (url.pathname === '/rest/v1/user_state') {
      if (req.method() === 'GET') return json(200, remoteState ? [{ data: remoteState, client_ts: 5 }] : []);
      calls.upserts.push(req.postDataJSON());
      return route.fulfill({ status: 201, headers: { 'access-control-allow-origin': '*' } });
    }
    if (url.pathname === '/functions/v1/ai') {
      calls.ai.push({ body: req.postDataJSON(), auth: req.headers().authorization });
      return json(200, { ok: true, data: { nombre: 'Plátano (65 g)', gramos: 65, kcal: 58, proteina: 0.7, hidratos: 13, grasas: 0.2 } });
    }
    return json(404, { message: 'not mocked: ' + url.pathname });
  });
  return calls;
}

test.describe('cloud mode', () => {
  test.use({ baseURL: CLOUD, viewport: { width: 390, height: 844 }, locale: 'es-ES' });

  test('requires sign-in, then syncs local + remote data', async ({ page }) => {
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    const calls = await mockSupabase(page, { remoteState: { w: [{ d: '2026-11-01', kg: 90 }], nm: 'Javi' } });
    await page.addInitScript(() => {
      if (!sessionStorage.getItem('seeded')) {
        localStorage.clear();
        localStorage.setItem('plan1', JSON.stringify({ w: [{ d: '2026-11-10', kg: 89 }] }));
        sessionStorage.setItem('seeded', '1');
      }
    });
    await page.goto('/');

    const gate = page.locator('#auth-gate');
    await expect(gate).toBeVisible();
    await gate.getByLabel('Email').fill(USER.email);
    await gate.getByLabel('Contraseña').fill('wrong-password');
    await gate.getByRole('button', { name: 'Entrar' }).click();
    await expect(gate.locator('.ag-msg')).toHaveText('Email o contraseña incorrectos.');

    await gate.getByLabel('Contraseña').fill('correct-horse');
    await gate.getByRole('button', { name: 'Entrar' }).click();
    await expect(gate).toBeHidden();
    await expect(page.locator('#cloud')).toHaveText('☁ Guardado en tu cuenta');

    // The legacy merge (fill) must combine both weights, and push them up.
    await expect.poll(() => calls.upserts.length).toBeGreaterThan(0);
    const up = calls.upserts.at(-1);
    expect(up.user_id).toBe(USER.id);
    expect(up.data.w.map((w) => w.d)).toEqual(['2026-11-01', '2026-11-10']);
    expect(up.data.bf).toEqual([]); // photos never go into the JSON blob

    // AI proxy: legacy SM.json(...) goes to the edge function with the user's JWT.
    const res = await page.evaluate(async () => {
      const sm = await window.claude.use('sample');
      return sm.json('Actúa como un dietista-nutricionista experto. Alimento: "65 g de plátano".', { modelTier: 'default' });
    });
    expect(res.kcal).toBe(58);
    expect(calls.ai[0].body).toMatchObject({ tier: 'default', feature: 'food_estimate', images: [] });
    expect(calls.ai[0].auth).toMatch(/^Bearer ey/);

    // Account section is added to the legacy menu.
    await page.evaluate(() => window.mnu());
    await expect(page.locator('#mnp .acc-menu summary')).toHaveText('☁️ Cuenta');
    expect(errors).toEqual([]);
  });
});
