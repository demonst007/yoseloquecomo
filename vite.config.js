import { defineConfig } from 'vite';
import legacyBlocks from './tools/vite-plugin-legacy-blocks.js';

export default defineConfig({
  plugins: [legacyBlocks()],
  server: { port: 5173, strictPort: true },
  preview: { port: 4173, strictPort: true },
  build: {
    target: 'es2020',
    sourcemap: true,
  },
});
