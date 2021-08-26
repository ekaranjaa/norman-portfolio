const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      gray: colors.blueGray,
      blue: colors.blue,
      cyan: colors.cyan
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sourcecode: ['"Source Code Pro"', 'monospace']
      }
    }
  },
  variants: {
    extend: {
      backgroundOpacity: ['dark']
    }
  },
  plugins: []
};
