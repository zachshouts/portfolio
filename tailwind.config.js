/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html',
    './public/**/**/*.{js}',
    './public/**/*.{html}'],
  theme: {
    extend: {
      colors: {
        'body': "#17171F",
        'selected-text': '#97FFCC',
        'theme': '#008058',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },
  plugins: [],
}
