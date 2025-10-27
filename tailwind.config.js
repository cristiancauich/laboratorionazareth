/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#06A8BF',
        'secondary': '#183A64',
        'tertiary': '#FFFD14',
        'gray': "#D9D9D9",
        'dark-gray': "#999999",
        'light-gray': "#F5F5F5",
        'whatsapp': "#25d366",
      },
      fontFamily: {
        'instrument': ['"Instrument Sans"', 'sans-serif'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

