import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    // Legacy blocks are verbatim extracted code (minified style); they are covered
    // by the parity e2e tests instead. Supabase functions are Deno (deno lint).
    ignores: [
      'dist/',
      'dist-test/',
      'src/legacy/',
      'reference/',
      'supabase/',
      'android/',
      'ios/',
      'playwright-report/',
      'test-results/',
    ],
  },
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: { globals: { ...globals.browser } },
  },
  {
    files: ['tools/**/*.{js,mjs}', 'tests/**/*.js', '*.config.js'],
    languageOptions: { globals: { ...globals.node, ...globals.browser } },
  },
];
