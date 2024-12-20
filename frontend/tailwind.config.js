/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        sourceCodePro: ["Source Code Pro", "monospace"],
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
      }
    },
  },
  plugins: [],
}
