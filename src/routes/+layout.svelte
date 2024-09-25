<script>
  import '../styles/global.css';
  import Nav from '$lib/components/Nav.svelte';
  import AnimatedNav from '$lib/components/AnimatedNav.svelte';
  import { page } from '$app/stores';

  let currentPath;
  $: currentPath = $page.url.pathname;
</script>

{#if currentPath === '/'}
  <AnimatedNav />
{:else}
  <Nav />
{/if}

<main>
  <slot />
</main>
