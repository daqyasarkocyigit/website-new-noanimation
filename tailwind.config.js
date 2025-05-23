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
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'cta-pattern': "url('https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
    },
  },
  plugins: [],
};