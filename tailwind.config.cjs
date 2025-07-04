/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        accent: '#C9F299',
        'text-primary': '#FFFFFF',
        'text-secondary': '#6C6C6C',
        'subtle-glow': 'rgba(201, 242, 153, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tightish: '-0.01em',
      },
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
}; 