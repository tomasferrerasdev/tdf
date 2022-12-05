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
      xl: '1200px',
    },
    fontFamily: {
      nunito: 'Nunito, sans-serif',
      montserrat: 'Montserrat, sans-serif',
    },

    extend: {
      colors: {
        white: '#dedede',
        black: '#171717',
        black_dark: '#000000',
        gray: '#2b2b2b',
        gray_light: '#666666',
      },
    },
  },
  plugins: [],
};
