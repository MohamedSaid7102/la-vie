/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(112 100% 37%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

