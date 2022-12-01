/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      nunito: 'Nunito, sans-serif',
      montserrat: 'Montserratm sans-serif',
    },
    colors: {
      white: '#E9EBEA',
      black: '#171717',
    },
    extend: {},
  },
  plugins: [],
};
