import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    open: true
  },
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  esbuild: {
    target: 'es2020',
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
});
