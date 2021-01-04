module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sourcesans: ['"Source Sans Pro"', 'sans-serif'],
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
