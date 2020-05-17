<script>
  import Nav from '../components/Nav.svelte'
  import { dictionary, theme } from '../stores/store.ts'

  export let segment
  console.log('current segment', segment)
</script>

<style>
  main {
    position: relative;
    max-width: fit-content;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<svelte:head>
  <link rel="stylesheet" href={`assets/css/themes/${$theme.short}.theme.css`} />
</svelte:head>

<Nav segment={'stat'} />

<main class="full-flex full-width">
  <slot />
</main>
