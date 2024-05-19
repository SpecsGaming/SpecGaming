/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-custom': '#eefa04',
        'yellow-light': '#f5fc68', // Un color más claro para el hover
      },
    },
  },
  plugins: [],
}