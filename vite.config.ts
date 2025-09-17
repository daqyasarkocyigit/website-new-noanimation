import { defineConfig } from 'vite';
+import react from '@vitejs/plugin-react';
+
+export default defineConfig({
+  plugins: [react()],
+  base: '/',
+  build: {
+    outDir: 'dist',
+    sourcemap: false,
+    minify: false, // Disable minification for debugging
+    target: 'es2018', // More compatible target
+    rollupOptions: {
+      output: {
+        manualChunks: undefined // Single bundle
+      }
+    }
+  },
+  server: {
+    port: 5173,
+    host: true
+  }
+});