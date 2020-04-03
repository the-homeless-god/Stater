<script>
  import ItemList from 'svelte-item-list/dist/index.js'
  import Box from '../common/Box.svelte'

  import { stats } from '../../stores/store.ts'

  console.log($stats)
</script>

<style>
  :global(.pagination) {
    width: 100%;
  }

  :global(.pagination) :global(.option) {
    color: #04a49c !important;
  }

  :global(.pagination) :global(.option.current) {
    color: #747474 !important;
  }

  :global(.item-icon) {
    border-radius: unset !important;
    width: auto !important;
    min-width: 23px;
  }

  :global(.item-description-text) {
    display: flex;
    flex-wrap: wrap;
  }

  :global(.item-description-text span) {
    width: 100%;
  }
</style>

{#if $stats.length > 0}
  <Box classList={'full-width'}>
    <ItemList
      needPag={false}
      needIndex={true}
      pageSize={$stats.length}
      needIcon={true}
      boldIndex={$stats.length + 1}
      iconProp={'icon'}
      nameProp={'country'}
      pointProp={'case'}
      descProp={'desc'}
      descIsHTML={true}
      endpointIsStore={true}
      endpoint={stats}
      sortFunc={(a, b) => {
        return b.case - a.case
      }}>

      <div slot="loading">loading...</div>
    </ItemList>

  </Box>
{/if}
