// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "~~": "/<rootDir>",
    "@@": "/<rootDir>",
    "~": "/<rootDir>",
    "@": "/<rootDir>",
    "@assets": "/<rootDir>/assets",
    "@public": "/<rootDir>/public",
    "@utils": "/<rootDir>/utils",
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
