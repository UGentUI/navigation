import { defineConfig } from "vite";

export default defineConfig({
  base: "/navigation/",
  css: {
    postcss: "./postcss.config.js",
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/navigation.js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "index.css") {
            return "assets/reset.css";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
