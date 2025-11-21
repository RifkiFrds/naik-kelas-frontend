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
        primary: '#B7FF40',
        secondary: '#334E69',
        tertiary: '#FF7A00',
      },
    },
  },
  plugins: [],
}