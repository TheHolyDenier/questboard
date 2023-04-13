import * as dotenv from 'dotenv';

dotenv.config();

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/settings.scss', '@mdi/font/css/materialdesignicons.css'],
  vite: {
    ssr: {
      noExternal: []
    },
    define: {
      'process.env.DEBUG': false
    }
  },
  build: {
    transpile: []
  },
  modules: [
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (options, nuxt) => {
      // @ts-ignore
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        if (!config.plugins) config.plugins = [];
        // return config.plugins.push(vuetify());
        return config;
      });
    },
    '@pinia/nuxt'
  ],
  // @ts-ignore
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
    ]
  }
  // buildModules: ['@nuxtjs/google-fonts'],
  // googleFonts: {
  //   families: {
  //     'Syne+Mono': true
  //   }
  // }
});
