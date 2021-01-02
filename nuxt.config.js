export default {
  target: 'static',

  head: {
    title: 'Norman Nuthu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Norman Nuthu Portfolio'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: ['@/assets/css/style.css'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxt/content'],

  axios: {},

  content: {},

  build: {}
};
