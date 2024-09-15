// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],

  app: {
    head: {
      title: 'JimeBlue-boilerplate-basic',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A simple Nuxt 3 boilerplate for basic projects.' },
        { hid: 'keywords', name: 'keywords', content: 'Nuxt 3, boilerplate, web development, Tailwind CSS, Nuxt UI' },
        { hid: 'author', name: 'author', content: 'Jimena Miguez' },
        { name: 'robots', content: 'index, follow' },
        { name: 'og:title', content: 'JimeBlue-boilerplate-basic' },
        { name: 'og:description', content: 'A simple Nuxt 3 boilerplate for basic projects.' },
        { name: 'og:image', content: '/og-image.png' }, // Add an Open Graph image
        { name: 'og:url', content: 'https://yourwebsite.com' }, // Update with the correct URL
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxt/ui', '@nuxtjs/i18n', 'nuxt-svgo', 'nuxt-headlessui', 'nuxt-lodash'],
  i18n: {
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-GB',
        file: 'en.json',
      },
      {
        name: 'Deutsch',
        code: 'de',
        iso: 'de-DE',
        file: 'de.json',
      },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'i18n',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    compilation: {
      strictMessage: false,
    },
  },
})
