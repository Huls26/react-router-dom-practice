/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-menu': "url('./src/assets/bg-picture/hero-menu.svg')",
      },
      colors: {
        'primary-1': '#FFF7ED',
        'secondary-1': '#4D4D4D',
        'dark-1': '#252525',
        'gray-1': '#AAAAAA',
        black: '#000000',
        blue: '#1fb6ff',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#FF8C38',
        green: '#13ce66',
        yellow: '#ffc82c',
        'gray-dark': '#273444',
        gray: '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        inter: ['Inter', 'sans-serif'],
        padauk: ['Padauk', 'sans-serif'],
        charis: ['Charis SIL'],
      },
    },
  },
  plugins: [],
};
