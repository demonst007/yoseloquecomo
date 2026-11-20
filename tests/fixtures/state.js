/** Deterministic sample state `S` for tests, relative to a fixed "today". */
export const TODAY = '2026-11-18';

const day = (offset) => {
  const d = new Date(`${TODAY}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + offset);
  return d.toISOString().slice(0, 10);
};

const TYPES = ['Empuje', 'Tracción', 'Cuádriceps y Gemelo', 'Femoral', 'Cardio', 'Descanso', 'Torso'];

export function sampleState() {
  const w = [];
  const t = {};
  const f = {};
  const m = [];
  const gh = {};
  for (let i = -34; i <= 0; i++) {
    const d = day(i);
    if (i % 2 === 0 || i > -5) w.push({ d, kg: Math.round((88 + i * 0.07 + ((i * 7) % 3) * 0.1) * 10) / 10 });
    t[d] = TYPES[(i + 35) % TYPES.length];
  }
  for (const i of [-1, 0]) {
    f[day(i)] = [
      { n: 'Desayuno habitual (leche, Nesquik, corn flakes)', k: 280, p: 13, h: 43, g: 5, s: 'Desayuno' },
      { n: 'Pechuga de pollo (200 g)', k: 330, p: 62, h: 0, g: 7, s: 'Comida' },
      { n: 'Arroz cocido (150 g)', k: 195, p: 4, h: 42, g: 0.5, s: 'Comida' },
      { n: 'Yogur natural', k: 61, p: 3.5, h: 4.7, g: 3.3, s: 'Merienda' },
    ];
  }
  for (const [i, v] of [
    [-28, { Cintura: 94, Cuello: 40, Pecho: 104, Cadera: 101, Bíceps: 36, Muslo: 60, Gemelo: 39 }],
    [-14, { Cintura: 92.5, Cuello: 39.5, Pecho: 104.5, Bíceps: 36.5 }],
    [0, { Cintura: 91, Cuello: 39.5, Pecho: 105 }],
  ]) {
    m.push({ d: day(i), v });
  }
  for (const [k, base] of [
    ['Empuje|Press superior en máquina de discos', 80],
    ['Tracción|Remo en T', 50],
    ['Femoral|Hip thrust en máquina Technogym', 40],
  ]) {
    gh[k] = [-21, -14, -7].map((i, n) => ({ d: day(i), kg: base + n * 2.5, r: 8 + n }));
  }
  return { w, t, f, m, gh, g: {}, bf: [], bo: '', gw: 82, obj: -0.5, nm: 'Javi', ts: 1 };
}
