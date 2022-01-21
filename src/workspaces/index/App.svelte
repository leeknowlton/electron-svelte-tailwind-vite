<script>
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <h1 class="text-red-800 btn btn-secondary">Hello world!</h1>

  <Counter />

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>
</main>

<style lang="scss">
  h1 {
    background-color: $gray-200;
    height: 100%;
  }
</style>
