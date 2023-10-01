/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      container: { padding: { DEFAULT: '15px' } },
      colors: {
        primary: '#2161D5',
        secondary: '#0B132A',
      },
      fontFamily: {
        primary: 'Rubik',
        secondary: 'DM Sans',
      },
    },
  },
  plugins: [],
};
