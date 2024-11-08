export default defineNuxtConfig({
  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.min.css', '@fortawesome/fontawesome-free/css/all.css'],
  ssr: true,
  build: {
      transpile: ['vuetify']
  },

  modules: ['@pinia/nuxt'],
  // plugins: [
  //   '~/plugins/cart.ts' // Đảm bảo plugin này được load đúng cách
  // ]
})