/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    fontFamily:{
      'roboto': ['Roboto', 'sans-serif'],
    },
    colors: {
      'blue-aqua': '#336B87',
      'blue-light': '#3498DB',
      'green-leaf': '#598234',
      'red-warning': '#FF6B6B',
      'yellow-mustard': '#FFC029',
      'white': '#FFFFFF',
      'gray-100': '#F3F4F6',
      'grey-text': '#535353',
      'green-success': '#006400',
      'red-alert': '#B30000',
      'dark-charcoal': '#333',
      'grey-doug': '#E2E2E2',
      
    },
    extend: {
      boxShadow:{
        'cardShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'filterShadow': 'filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));'
      }
    },
  },
  plugins: [],
}

