export default defineNuxtConfig({
  compatibilityDate: "2026-05-19",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/eslint-module"],
  css: ["./app/assets/css/main.css"],
  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
});
