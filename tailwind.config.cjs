/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Poltawski': 'Lato, sans-serif',
        'Sigmar': 'Sigmar, cursive',
      },
      colors:{
        "opacity-black": "rgba(0,0,0,0.8)"
      }
    },
  },
  plugins: [],
}
