import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig as defineViteConfig } from 'vite';
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
      'framer-motion',
      'lucide-react',
      'react-intersection-observer',
      'react-type-animation'
    ],
    exclude: ['@vite/client', '@vite/env'],
    force: false,
    esbuildOptions: {
      target: 'es2020'
    }
  },
  build: {
    cssTarget: 'chrome80',
    modulePreload: {
      polyfill: false
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'animations': ['framer-motion', 'react-type-animation', 'react-intersection-observer'],
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
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false
      }
    },
    cssCodeSplit: true,
    cssMinify: 'lightningcss',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
        passes: 3,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        hoist_funs: true,
        hoist_vars: true
      },
      mangle: {
        safari10: true,
        toplevel: true
      },
      format: {
        comments: false
      }
    },
    reportCompressedSize: process.env.NODE_ENV === 'development',
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 4096,
    sourcemap: false,
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14']
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block'
    },
    host: true,
    port: 5173,
    hmr: {
      overlay: false
    },
    fs: {
      strict: false
    }
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable, stale-while-revalidate=86400',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block'
    }
  },
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    legalComments: 'none',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    treeShaking: true
  }
});