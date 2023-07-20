/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        "custom-color": "#4400ff"
      },
      borderWidth: {
        "1": "1px"
      }
      
    },
  },
  plugins: [],
}

