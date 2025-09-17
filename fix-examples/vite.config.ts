import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure correct base path
  build: {
    rollupOptions: {
      output: {
        // Simplify chunk strategy
        manualChunks: undefined
      }
    },
    // Ensure assets are correctly referenced
    assetsDir: 'assets'
  }
});