module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      backgroundOpacity: ['dark']
    }
  },
  plugins: []
};
