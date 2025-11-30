// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: 'app/',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/image', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    cookie: 'nuxt-color-mode',
    globalName: 'colorMode',
    componentName: 'ColorScheme',
    attribute: 'data-theme',
    cookieOptions: {
      prefix: 'color-mode',
      maxAge: 60 * 60 * 24 * 30
    }
  },
  icon: {
    mode: 'css',
    cssLayer: 'base'
  }
})