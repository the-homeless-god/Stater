<script>
  import ItemList from 'svelte-item-list/dist/index.js'
  import Box from '../common/Box.svelte'

  import { stats } from '../../stores/store.ts'
</script>

<style>
  :global(.list-stat-block span) {
    margin: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :global(.list-stat-block b) {
    margin-left: 5px;
  }

  :global(.list-stat-block) {
    display: flex;
    width: 300px;
  }
</style>

{#if $stats.length > 0}
  <Box classList={'full-width'}>

    {#each $stats as stat}
      <Box classList={'list-stat-block'}>
        <div class="full-width flex-center">
          <img src={stat.icon} alt="country icon" />
          <b>{stat.country}</b>
        </div>
        {@html stat.desc}
      </Box>
    {/each}

  </Box>
{/if}
