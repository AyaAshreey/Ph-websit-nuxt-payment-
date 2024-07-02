// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  components: true,
  devtools: { enabled: true },
  css: [
    // CSS file in the project
    "@/assets/css/main.css",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: true,
          // additionalData: `@import "@/assets/scss/mixins.scss"; @import "@/assets/scss/variables.scss";`,
        },
      },
    },

  },

  modules: [
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@nuxtjs/strapi",
    "vuetify-nuxt-module",
    "nuxt-swiper",
    // '@nuxtjs/vuex'
    // "pinia-plugin-persistedstate", //to save state
  ],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      theme: { dark: false },
      icons: {
        iconfont: 'mdi',
      },
    }
  },
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',

    modules: ['navigation', 'pagination', 'autoplay'], // all modules are imported by default
  },
  // plugins: [
  //   '~/plugins/piniaPersistedstate.ts',

  // ],

  imports: {
    dirs: ['stores'],
    autoImport: true, // Enable auto-import globally
  },

  i18n: {
    /* module options */
    langDir: "locales",
    locales: [
      { name: "English", code: "en", iso: "en-US", file: "en.json", dir: "ltr" },
      { name: "عربى", code: "ar", iso: "ar-EG", file: "ar.json", dir: "rtl" },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
    defaultLocale: "ar",
  },

});