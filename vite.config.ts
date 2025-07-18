// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        privacy: "./privacy.html",
        tos: "./tos.html",
        // Add other HTML files here
      },
    },
  },
});
