// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://luisurruela-newera.github.io",
  base: "/neweramx-web/",
  image: {
    domains: ["assets/images/*.svg", "assets/images/*.png", "assets/images/*.jpg", "assets/images/*.jpeg", "assets/images/*.webp"],
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