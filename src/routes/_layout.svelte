<script>
  import Nav from '../components/Nav.svelte'

  export let segment
  console.log('current segment', segment)
</script>

<style>
  main {
    position: relative;
    max-width: fit-content;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav segment={'stat'} />

<main class="full-flex full-width">
  <slot />
</main>
