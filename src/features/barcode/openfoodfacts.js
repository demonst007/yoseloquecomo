/**
 * Product lookup in Open Food Facts (free, open database, good coverage of
 * Spanish supermarket products). https://openfoodfacts.github.io/openfoodfacts-server/api/
 */
const API = 'https://world.openfoodfacts.org/api/v2/product/';
const FIELDS = 'code,product_name,product_name_es,brands,quantity,serving_quantity,nutriments';

const round1 = (n) => Math.round(n * 10) / 10;
const numOrNull = (v) => (v === '' || v == null || Number.isNaN(Number(v)) ? null : Number(v));

/** Normalises an OFF product into what the food form needs (values per 100 g/ml). */
export function toFood(code, p) {
  const n = p.nutriments || {};
  let kcal = numOrNull(n['energy-kcal_100g']);
  if (kcal == null && numOrNull(n.energy_100g) != null) kcal = n.energy_100g / 4.184; // kJ → kcal
  const name = (p.product_name_es || p.product_name || '').trim();
  const brand = (p.brands || '').split(',')[0].trim();
  return {
    code,
    name: name ? (brand && !name.toLowerCase().includes(brand.toLowerCase()) ? `${name} (${brand})` : name) : '',
    per100: {
      k: kcal == null ? null : Math.round(kcal),
      p: numOrNull(n.proteins_100g) == null ? null : round1(n.proteins_100g),
      h: numOrNull(n.carbohydrates_100g) == null ? null : round1(n.carbohydrates_100g),
      g: numOrNull(n.fat_100g) == null ? null : round1(n.fat_100g),
    },
    serving: numOrNull(p.serving_quantity),
  };
}

/** @returns {Promise<ReturnType<typeof toFood> | null>} null when the product is unknown. */
export async function lookupProduct(code, { signal } = {}) {
  const res = await fetch(`${API}${encodeURIComponent(code)}.json?fields=${FIELDS}`, { signal });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Open Food Facts respondió ${res.status}`);
  const json = await res.json();
  if (json.status !== 1 || !json.product) return null;
  return toFood(code, json.product);
}
