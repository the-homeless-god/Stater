<script>
  import ItemList from 'svelte-item-list/dist/index.js'
  import Box from '../common/Box.svelte'

  import { totalStat } from '../../stores/store.ts'
</script>

<style>
  :global(.total-stat-block span) {
    margin: 10px;
  }

  .title {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  :global(.total-stat-block) {
    display: flex;
  }
</style>

{#if $totalStat}
  <Box classList={'full-width total-stat-block'}>
    <b class="title">World statistic</b>
    {@html $totalStat.desc}
  </Box>
{/if}
