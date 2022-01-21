// svelte.config.js

const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  preprocess: [
    sveltePreprocess({
      scss: {
        prependData: '@use "src/assets/styles/_base.scss" as *;',
      },
    }),
  ],
};
