// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "http://aptudemxdev.com",
  base: "/neweratech-mx/",
  image: {
    domains: ["assets/images/*.svg"],
  },

  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },

  integrations: [icon()],
});