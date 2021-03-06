import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.IS_DEV !== "true" ? "./" : "/",
  build: {
    outDir: "main/build",
  },
  plugins: [
    svelte({
      configFile: "../svelte.config.js",
    }),
  ],
});
