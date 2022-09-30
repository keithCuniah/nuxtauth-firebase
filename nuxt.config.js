export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  mode: 'spa',
  // ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtauth-firebase',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyATwcHVl-qFBSponsJ2sx-tsA5h-Sk0SGQ',
          authDomain: 'nuxtauth-firebase.firebaseapp.com',
          projectId: 'nuxtauth-firebase',
          storageBucket: 'nuxtauth-firebase.appspot.com',
          messagingSenderId: '878687721443',
          appId: '1:878687721443:web:4ac845e9a0685e3d4672d6',
          measurementId: 'G-KET510M2ZZ',
        },
        services: {
          auth: {
            initialize: {
              onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
            },
          },
        },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
