import 'vuetify/dist/vuetify.min.css';

import '@mdi/font/css/materialdesignicons.css';

import { createVuetify } from 'vuetify';

import { aliases, mdi } from 'vuetify/lib/iconsets/mdi';

const customTheme = {
  dark: false,
  colors: {
    background: '#EEEEEEEE',
    surface: '#FFF',
    primary: '#FF1744',
    'primary-darken-1': '#582630',
    secondary: '#A5FFD6',
    'secondary-darken-1': '#84DCC6',
    error: '#ff3333',
    info: '#809BCE',
    success: '#488B49',
    warning: '#FFE156'
  }
};
// #251605
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'customTheme',
      themes: {
        customTheme
      }
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    }
  });

  nuxtApp.vueApp.use(vuetify);
});
