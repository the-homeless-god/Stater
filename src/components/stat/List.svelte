<script>
  import Box from '../common/Box.svelte'

  import { stats } from '../../stores/store.ts'
</script>

<style>
  :global(.list-stat-block span) {
    margin: 10px;
    width: auto;
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

  .contry {
    border-bottom: 1px solid #eee;
    padding: 12px;
  }

  .item-list {
    margin: 20px;
    padding: 20px;
    max-width: fit-content;
    height: fit-content;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
</style>

{#if $stats.length > 0}
  <div class="full-width item-list">

    {#each $stats as stat}
      <Box classList={'list-stat-block'}>
        <div class="full-width flex-center contry">
          <img src={stat.icon} alt="country icon" />
          <b>{stat.country}</b>
        </div>
        <div class="full-width flex-center">
          {@html stat.desc}
        </div>
      </Box>
    {/each}

  </div>
{/if}
