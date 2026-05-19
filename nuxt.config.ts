export default defineNuxtConfig({
  compatibilityDate: "2026-05-19",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/eslint-module"],
  css: ["./app/assets/css/main.css"],
  typescript: {
    typeCheck: true,
  },
  ui: {
    fonts: false,
  },
  icon: {
    serverBundle: {
      collections: ["lucide"],
    },
  },
  eslint: {
    lintOnStart: false,
  },
  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
});
