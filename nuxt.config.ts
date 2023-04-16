import * as dotenv from 'dotenv';

dotenv.config();

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['maz-ui/css/main.css', '~/settings.scss'],
  vite: {
    ssr: {
      noExternal: []
    },
    define: {
      'process.env.DEBUG': false
    }
  },
  build: {
    transpile: ['maz-ui']
  },
  modules: ['@pinia/nuxt'],
  // @ts-ignore
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
    ]
  }
});
