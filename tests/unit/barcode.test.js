import { describe, it, expect, vi } from 'vitest';
import { parseScanned } from '../../src/features/barcode/scan.js';
import { toFood } from '../../src/features/barcode/openfoodfacts.js';

vi.mock('../../src/platform/native.js', () => ({ isNative: false, platform: 'web' }));

describe('parseScanned', () => {
  it('accepts EAN-8/13 and UPC numbers', () => {
    expect(parseScanned('8410000810004')).toEqual({ code: '8410000810004' });
    expect(parseScanned(' 96385074 ')).toEqual({ code: '96385074' });
    expect(parseScanned('012345678905')).toEqual({ code: '012345678905' });
  });
  it('extracts the GTIN from a GS1 Digital Link QR', () => {
    expect(parseScanned('https://id.gs1.org/01/08410000810004/10/ABC')).toEqual({ code: '8410000810004' });
    expect(parseScanned('https://example.com/01/18410000810001')).toEqual({ code: '18410000810001' });
  });
  it('treats anything else as plain text', () => {
    expect(parseScanned('https://example.com/menu')).toEqual({ text: 'https://example.com/menu' });
    expect(parseScanned('1234')).toEqual({ text: '1234' });
    expect(parseScanned(null)).toEqual({ text: '' });
  });
});

describe('toFood (Open Food Facts → form values per 100 g)', () => {
  it('maps nutriments and appends the brand', () => {
    const f = toFood('123', {
      product_name_es: 'Yogur natural',
      brands: 'Hacendado, Mercadona',
      serving_quantity: '125',
      nutriments: { 'energy-kcal_100g': 61.4, proteins_100g: 3.46, carbohydrates_100g: 4.7, fat_100g: 3.3 },
    });
    expect(f).toEqual({
      code: '123',
      name: 'Yogur natural (Hacendado)',
      per100: { k: 61, p: 3.5, h: 4.7, g: 3.3 },
      serving: 125,
    });
  });
  it('does not repeat the brand already in the name and converts kJ', () => {
    const f = toFood('1', { product_name: 'Nesquik cacao', brands: 'Nesquik', nutriments: { energy_100g: 1569 } });
    expect(f.name).toBe('Nesquik cacao');
    expect(f.per100).toEqual({ k: 375, p: null, h: null, g: null });
    expect(f.serving).toBeNull();
  });
});
