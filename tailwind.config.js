/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        garamond: ['"Cormorant Garamond"', "serif"],
        dmserif: ['"DM Serif Display"', "serif"],
        playfair: ['"Playfair Display"', "serif"],
        thai: ['"Noto Sans Thai"', "sans-serif"],
      },
    },
  },
  safelist: [
    'font-garamond',
    'font-dmserif',
    'font-playfair',
    'font-thai'
  ],
  plugins: [],
};
