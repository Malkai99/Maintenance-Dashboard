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
      'black': '#000000',
      'blue-button': '#1976d2',
      'transparent': 'transparent',
      
    },
    extend: {
      boxShadow:{
        'cardShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'filterShadow': 'filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));'
      },
      transitionProperty: {
        'bg': 'background-color'
      },
      transitionTimingFunction: {
        'button-ease': ' cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
      }
    },
  },
  plugins: [],
}

