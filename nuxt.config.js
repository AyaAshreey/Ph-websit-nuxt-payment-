// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';


export default defineNuxtConfig({
  plugins: [
    '~/plugins/vuex.js'
  ],
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],
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
  runtimeConfig: {
    public: {
      myfatoorahApiToken: process.env.MYFATOORAH_API_TOKEN,
    },
  },

  head: {
    titleTemplate: 'Murabba Nuxt Task',
    // title: 'EradUninted',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },],
    script: [{ src: 'https://kit.fontawesome.com/9c831b27e0.js' }],
    script: [{ src: 'https://sa.myfatoorah.com/cardview/v2/session.js' }],
  },



});