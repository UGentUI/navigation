import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  css: {
    postcss: "./postcss.config.js",
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/@ugent-ui/css-reset/dist/reset.css",
          dest: "assets",
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/navigation.js",
      },
    },
  },
});
