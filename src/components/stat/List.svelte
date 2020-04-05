<script>
  import Box from '../common/Box.svelte'

  import { stats } from '../../stores/store.ts'
  import ItemList from 'svelte-item-list/dist/index.js'
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
    margin: 0px 20px 0px 20px;
    padding: 0px 20px 0px 20px;
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

    <ItemList
      needPag={true}
      pageSize={9}
      needIndex={false}
      needPoint={false}
      needBody={false}
      endpointIsStore={true}
      endpoint={stats}
      let:items>
      <div slot="loading">loading...</div>

      <div class="full-flex full-width" slot="body">
        {#each items as item}
          <Box classList={'list-stat-block'}>
            <div class="full-width flex-center contry">
              <img src={item.icon} alt="country icon" />
              <b>{item.country}</b>
            </div>
            <div class="full-width flex-center">
              {@html item.desc}
            </div>
          </Box>
        {/each}
      </div>
    </ItemList>

  </div>
{/if}
