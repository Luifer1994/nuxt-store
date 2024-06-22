export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/image"
  ],
  app: {
    head: {
      titleTemplate: '%s | Mi Tienda Nuxt 3',
      meta: [
        { name: "description", content: "Bienvenido a Mi Tienda Nuxt 3, tu destino ideal para productos increíbles con grandes ofertas." },
        { name: "keywords", content: "Nuxt, Vue, SEO, ecommerce, tienda en línea, ofertas" },
        { property: "og:title", content: "Mi Tienda Nuxt 3" },
        { property: "og:description", content: "Descubre productos increíbles y grandes ofertas en Mi Tienda Nuxt 3." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://www.mitiendanuxt3.com" },
        { property: "og:image", content: "/og-image.jpg" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Mi Tienda Nuxt 3" },
        { name: "twitter:description", content: "Descubre productos increíbles y grandes ofertas en Mi Tienda Nuxt 3." },
        { name: "twitter:image", content: "/twitter-image.jpg" },
        { name: "author", content: "Mi Tienda Nuxt 3" },
        { name: "robots", content: "index, follow" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://www.mitiendanuxt3.com" }
      ],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-Y",
          async: true
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-XXXXX-Y');
          `
        }
      ],
    },
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      routes: [
        '/',            // Ruta principal
        '/nuxt-store',  // Asegúrate de que esta ruta exista o sea necesaria
        '/200.html',    // Personaliza según tus necesidades
        '/404.html'     // Personaliza según tus necesidades
      ]
    }
  },
  build: {},
  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY,
      urlBaseApi: process.env.URL_API,
      apiHost: process.env.API_HOST,
      titleTemplate: '%s | Mi Tienda Nuxt 3',
    }
  },
  plugins: []
});
