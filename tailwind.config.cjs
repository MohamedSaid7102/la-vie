/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(112 100% 37%)',
        footerBg: '#FAFAFA',
      },
      screens: {
        'hero-break-1': '750px',
        'hero-break-2': '1226px',
        'hero-break-3': '1468px',

        'about-us-break-1': '940px',

        'mobile-app-break-1': '1166px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

