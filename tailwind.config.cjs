/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'side-bar': 'rgba(29, 25, 50, 1)',
        'main-panel': 'rgba(29, 18, 43, 1)',
        'search-bar': 'rgba(29, 25, 50, 1)',
        'top-1': 'rgba(111, 79, 242, 0.5)',
        'explore': 'rgba(111, 79, 242, 1)',
        'create': 'rgba(220, 53, 70, 1)',
      },
      fontFamily:{
        'Poppins': ['Poppins'],
      }
    },
  },
  plugins: [],
}
