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
      },
      colors:{
        "opacity-black": "rgba(0,0,0,0.8)"
      }
    },
  },
  plugins: [],
}
