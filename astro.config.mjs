// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://luisurruela-newera.github.io",
  base: "neweramx-web",
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