/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        customGreen: '#C5EAD9', // Your custom color
      },
    },
  },
  plugins: [],
}


