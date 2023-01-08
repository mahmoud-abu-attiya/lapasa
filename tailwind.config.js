/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
   extend: {
      colors: {
         pri: "#7f2217",
         sec: "#d3ad9d",
      }
   },
   container: {
      center: true,
      padding: "1rem",
   },
},
  plugins: [],
}