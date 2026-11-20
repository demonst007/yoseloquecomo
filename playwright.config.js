import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 120_000,
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL: 'http://localhost:4173',
    trace: 'retain-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: [
    {
      // Local-only build (no Supabase env): used for parity with the original.
      command: 'npx vite build --outDir dist-test/local && npx vite preview --outDir dist-test/local --port 4173',
      url: 'http://localhost:4173',
      reuseExistingServer: !process.env.CI,
      timeout: 120_000,
      env: { VITE_SUPABASE_URL: '', VITE_SUPABASE_ANON_KEY: '' },
    },
    {
      // Cloud build pointing to a fake Supabase project (mocked in tests).
      command: 'npx vite build --outDir dist-test/cloud && npx vite preview --outDir dist-test/cloud --port 4174',
      url: 'http://localhost:4174',
      reuseExistingServer: !process.env.CI,
      timeout: 120_000,
      env: { VITE_SUPABASE_URL: 'https://fake-project.supabase.co', VITE_SUPABASE_ANON_KEY: 'fake-anon-key' },
    },
  ],
});
