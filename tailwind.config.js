/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./src/**/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        TitilliumWeb: ["Titillium Web", "sans-serif"],
      },
    },
  },
  plugins: [],
};
