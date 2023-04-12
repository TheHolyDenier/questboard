import * as dotenv from 'dotenv';
import vuetify from 'vite-plugin-vuetify';

dotenv.config();

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'vuetify/styles',
    '~/settings.scss',
    '@mdi/font/css/materialdesignicons.css'
  ], // vuetify ships precompiled css, no need to import sass
  vite: {
    ssr: {
      noExternal: ['vuetify'] // add the vuetify vite plugin
    },
    define: {
      'process.env.DEBUG': false
    }
  },
  build: {
    transpile: ['vuetify']
  },
  modules: [
    // this adds the vuetify vite plugin
    // also produces type errors in the current beta release
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (options, nuxt) => {
      // @ts-ignore
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        if (!config.plugins) config.plugins = [];
        return config.plugins.push(vuetify());
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
