/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        opensans: ["var(--font-opensans)"],
        playfair: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
};
