/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Warna kustom Anda dipindahkan ke sini
        primary: '#FFAE19',
        secondary: '#000B2C',
        tertiary: '#FF7A00',
      },
    },
  },
  plugins: [],
}