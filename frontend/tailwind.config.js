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
        black: "#20201D",
        darkGrey: "#2C2C2A",
        grey: "#3D3D3A",
        white: "#F9F7EF",
        accent: "#465356",
      },
      spacing: {
        section: "7rem"
      }
    },
  },
  plugins: [],
}
