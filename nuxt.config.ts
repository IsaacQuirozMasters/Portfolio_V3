export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: 'app/',

  // Módulos necesarios
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n'
  ],

  // Configuración de la App (SEO Global)
  app: {
    head: {
      htmlAttrs: {
        lang: 'es' // Crucial para SEO en español
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Isaac Quiroz' },
        // Color de la barra de navegación en móviles
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/group.png' }
      ]
    }
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'es',
    locales: [
      { code: 'es', iso: 'es-MX', file: 'es.json', name: 'Español' },
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'pt', iso: 'pt-BR', file: 'pt.json', name: 'Português' }
    ],
    langDir: '../app/locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieSecure: true,
      fallbackLocale: 'es'
    },
    compilation: {
      strictMessage: false
    },
    vueI18n: './i18n.config.ts'
  },
  // Optimización de imágenes (Nuxt Image)
  image: {
    // Definimos los breakpoints para generar versiones responsivas
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    // Formatos automáticos
    format: ['webp', 'avif', 'jpeg'],
  },

  // ... resto de tu configuración (colorMode, icon, etc.)
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
    globalName: 'colorMode',
    componentName: 'ColorScheme',
  },
  icon: {
    mode: 'css',
    cssLayer: 'base'
  }
})