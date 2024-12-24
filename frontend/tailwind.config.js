/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sourceCodePro: ['Source Code Pro', 'monospace'],
      },
      fontSize: {
        base: ['18px', '1.5'],
        small: ['16px', '1.4'],
        h1: ['36px', '1.2'],
        h2: ['28px', '1.3'],
        h3: ['28px', '1.4'],
        nav: ['18px', '1.6'],
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
