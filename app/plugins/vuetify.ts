import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "system",
      variations: {
        colors: ["primary", "secondary"],
        lighten: 3,
        darken: 4,
      },
      themes: {
        light: {
          dark: false,
          colors: {
            background: "#e2e3e4",
            surface: "#e2e3e4",
            primary: "#6002ee",
            "on-background": "#181818",
            "on-primary": "#ececec",
            secondary: "#03dac5",
          },
        },
        dark: {
          dark: true,
          colors: {
            background: "#181818",
            surface: "#181818",
            primary: "#9f6bf2",
            "on-background": "#e2e3e4",
            "on-primary": "#03040c",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
