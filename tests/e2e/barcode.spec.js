/** Barcode scan on the web (no BarcodeDetector in desktop Chrome: typed code path). */
import { test, expect } from '@playwright/test';
import { sampleState } from '../fixtures/state.js';

test('scanning a product fills the manual form with values per 100 g', async ({ page }) => {
  await page.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
  await page.route('https://world.openfoodfacts.org/api/v2/product/**', (r) => {
    const code = new URL(r.request().url()).pathname.split('/').pop().replace('.json', '');
    if (code !== '8480000123456') return r.fulfill({ status: 404, json: { status: 0 } });
    return r.fulfill({
      json: {
        status: 1,
        product: {
          product_name_es: 'Pechuga de pavo',
          brands: 'Hacendado',
          serving_quantity: 50,
          nutriments: { 'energy-kcal_100g': 98, proteins_100g: 19.5, carbohydrates_100g: 1.2, fat_100g: 1.6 },
        },
      },
    });
  });
  // Existing user (with data), so the first-run welcome wizard does not show.
  await page.addInitScript((s) => localStorage.setItem('plan1', JSON.stringify(s)), sampleState());
  await page.goto('/');
  await page.evaluate(() => window.go(0));

  const scan = page.locator('#scan-btn');
  await expect(scan).toHaveText('📷 Escanear código de barras');
  await scan.click();
  await page.getByLabel('Número del código').fill('8480000123456');
  await page.getByRole('button', { name: 'Buscar' }).click();

  await expect(page.locator('#man')).toHaveJSProperty('open', true);
  await expect(page.locator('#fn')).toHaveValue('Pechuga de pavo (Hacendado)');
  await expect(page.locator('#fk')).toHaveValue('98');
  await expect(page.locator('#fp')).toHaveValue('19,5');
  await expect(page.locator('#fh')).toHaveValue('1,2');
  await expect(page.locator('#fg')).toHaveValue('1,6');
  await expect(page.locator('#fgr')).toHaveValue('50');
  await expect(page.locator('#fu')).toHaveValue('100');

  // The legacy "Añadir" computes the portion: 50 g → 49 kcal, 9.8 g protein.
  await page.locator('#man').getByRole('button', { name: 'Añadir', exact: true }).click();
  const added = await page.evaluate(() => {
    const S = window.__legacy.getState();
    return Object.values(S.f)
      .flat()
      .find((x) => x.n.startsWith('Pechuga de pavo'));
  });
  expect(added).toMatchObject({ n: 'Pechuga de pavo (Hacendado) (50 g)', k: 49, p: 9.8 });

  // Unknown product: form opens for manual entry.
  await page.evaluate(() => window.go(0));
  await page.locator('#scan-btn').click();
  await page.getByLabel('Número del código').fill('1111111111111');
  await page.getByRole('button', { name: 'Buscar' }).click();
  await expect(page.locator('#fn')).toHaveValue('Producto 1111111111111');
});
