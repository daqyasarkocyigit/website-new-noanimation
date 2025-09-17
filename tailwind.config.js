/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    // Background gradients
    'bg-gradient-to-r',
    'bg-gradient-to-l', 
    'bg-gradient-to-t',
    'bg-gradient-to-b',
    'bg-gradient-to-br',
    'bg-gradient-to-bl',
    'bg-gradient-to-tr',
    'bg-gradient-to-tl',
    // From/via/to colors
    'from-gray-900',
    'from-gray-800',
    'from-red-500',
    'from-red-600',
    'via-gray-800',
    'via-red-500',
    'to-gray-900',
    'to-red-600',
    'to-red-700',
    // Brand colors
    'bg-brand-red-600',
    'text-brand-red-600',
    'border-brand-red-600',
    'hover:bg-brand-red-700',
    // Common utilities
    'animate-pulse',
    'animate-spin'
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': {
          50: '#fff5f5',
          100: '#ffe3e3',
          200: '#ffc9c9',
          300: '#ffa8a8',
          400: '#ff8a8a',
          500: '#FF3333',
          600: '#e02d2d',
          700: '#c53030',
          800: '#9b2c2c',
          900: '#742a2a',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
};