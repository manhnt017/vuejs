// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },
  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },

  image: {
    domains: ["https://jsonplaceholder.typicode.com"],
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxtjs/google-fonts", "@nuxt/image","@pinia/nuxt"],
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
});
