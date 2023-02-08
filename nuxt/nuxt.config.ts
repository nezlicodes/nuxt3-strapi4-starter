// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/styles/main.pcss"],
    modules: [
      [
        "@nuxtjs/i18n",
        {
          strategy: "prefix_except_default",
          defaultLocale: "en",
          locales: [
            {
                code: 'fr',
                name: 'Français',
                iso: 'fr-FR',
                momentLocale: 'fr-FR',
            },
            {
                code: 'en',
                name: 'English',
                iso: 'en-EN',
                momentLocale: 'en',
            },
            {
                code: 'de',
                name: 'German',
                iso: 'de-DE',
                momentLocale: 'de',
            },
        ],
          vueI18n: {
            legacy: false,
            locale: "de",
            availableLocales: ["fr", "en", "de"],
            
          },
        },
      ],
      "@nuxtjs/strapi",
      "nuxt-icon",
    ],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  
    strapi: {
      url:  process.env.STRAPI_URL || 'http://localhost:1337',
    },
  });
  