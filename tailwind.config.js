/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./card-component/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'merriweather': ['Merriweather', 'sans-serif']
    }
  },
  plugins: [],
}