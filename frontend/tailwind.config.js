/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sourceCodePro: ['Source Code Pro', 'monospace'],
      },
      colors: {
        black: '#000000',
        white: '#ffffff',
        accent: '#9abdba',
      }
    },
  },
  plugins: [],
}
