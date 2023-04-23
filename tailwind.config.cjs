/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Castoro':'Castoro Titling, cursive',
        'Poltawski': 'Poltawski Nowy, serif',
      },
      colors:{
        "opacity-black": "rgba(0,0,0,0.5)"
      }
    },
  },
  plugins: [],
}
