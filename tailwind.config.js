/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-red': {
          50: '#fff1f1',
          100: '#ffdfdf',
          200: '#ffc5c5',
          300: '#ff9e9e',
          400: '#ff6b6b',
          500: '#ff3838',
          600: '#ff1414',
          700: '#e60000',
          800: '#b30000',
          900: '#910000',
        },
        'slate-blue': {
          50: '#f5f7ff',
          100: '#ebf0ff',
          200: '#d6e0ff',
          300: '#adc3ff',
          400: '#7c9eff',
          500: '#4b78ff',
          600: '#1a52ff',
          700: '#0038e6',
          800: '#002db3',
          900: '#002499',
        },
        'cool-gray': {
          50: '#f7f8f9',
          100: '#eceef1',
          200: '#d5dae2',
          300: '#b3bac7',
          400: '#8b95a7',
          500: '#6b7689',
          600: '#515b6e',
          700: '#3f4757',
          800: '#2d3441',
          900: '#1b1f28',
        },
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(239, 68, 68, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(239, 68, 68, 0.8)' },
        },
      },
    },
  },
  plugins: [
    function({ addVariant, addUtilities }) {
      addVariant('supports-hover', '@media (hover: hover)');
      addVariant('touch', '@media (hover: none)');
      addVariant('reduced-motion', '@media (prefers-reduced-motion: reduce)');
      
      addUtilities({
        '.tap-highlight-none': {
          '-webkit-tap-highlight-color': 'transparent',
        },
        '.touch-manipulation': {
          'touch-action': 'manipulation',
        },
        '.gpu-accelerated': {
          'transform': 'translateZ(0)',
          'will-change': 'transform',
        },
      });
    },
  ],
};