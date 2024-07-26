// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "shadcn-nuxt",
    'nuxt-icon',
    '@pinia/nuxt',
    ['@nuxtjs/google-fonts', { families: { Lato: [300, 400, 700], } }],
    ['@vee-validate/nuxt', { autoImports: true, }],
  ],
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  },
  pinia: {
    storesDirs: ['./store/**'],
  },
  plugins: ['~/plugins/vue-query.ts'],
})