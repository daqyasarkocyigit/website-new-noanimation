import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { splitVendorChunkPlugin } from 'vite';

export default defineConfig({
  plugins: [
    react({
      fastRefresh: process.env.NODE_ENV === 'development',
      babel: {
        plugins: [
          // Remove console.log in production
          ...(process.env.NODE_ENV === 'production' ? [['transform-remove-console', { exclude: ['error', 'warn'] }]] : [])
        ]
      }
    }),
    splitVendorChunkPlugin()
  ],
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  },
  resolve: {
    alias: {
      'react': path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
      'react-router-dom': path.resolve('./node_modules/react-router-dom')
    }
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'lucide-react',
      'react-intersection-observer'
    ],
    exclude: ['@vite/client', '@vite/env'],
    esbuildOptions: {
      target: 'es2020'
    }
  },
  build: {
    cssTarget: 'chrome80',
    modulePreload: {
      polyfill: false
    },
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'utils': ['react-intersection-observer'],
          'icons': ['lucide-react']
        },
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(css)$/.test(assetInfo.name)) {
            return `css/[name].[hash].${ext}`;
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `img/[name].[hash].${ext}`;
          }
          return `assets/[name].[hash].${ext}`;
        }
      },
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false
      }
    },
    cssCodeSplit: true,
    cssMinify: 'esbuild',
    reportCompressedSize: process.env.NODE_ENV === 'development',
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    target: 'es2020'
  },
  server: {
    host: true,
    port: 5173,
    hmr: true
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  },
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : []
  }
});