export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: 'app/',

  // Módulos necesarios
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/color-mode'
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
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
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