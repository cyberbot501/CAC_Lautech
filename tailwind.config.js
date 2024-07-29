/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        Cinzel: ["Cinzel", "serif"],
        Inter: ["Inter", "sans-serif"]
      }

    },
  },
  plugins: [],
}

