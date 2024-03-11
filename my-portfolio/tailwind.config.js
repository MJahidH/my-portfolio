/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#004E89",
        secondary : "#006494",
        mainFontColor : ""
      }
    },
  },
  plugins: [],
}