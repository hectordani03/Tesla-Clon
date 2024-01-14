/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        '4xl': '40px',
      },
      fontFamily: {
        'GothamSSmA': ['Gotham SSm A', 'sans-serif'],
      },
    },
    variants: {
      zIndex: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}

