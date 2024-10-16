/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff7700',
        lightblue: '#e1f8ff',
        light: '#f1f5f9',
        blue: '#0022c0'
      },
      fontFamily: {
        lato: ['nunito', 'sans-serif']
      }
    }
  },
  safelist: ['from-lightblue', 'to-light'],
  plugins: []
}
