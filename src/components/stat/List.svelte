<script>
  import Box from '../common/Box.svelte'

  import { stats } from '../../stores/store.ts'
  import ItemList from 'svelte-item-list/dist/index.js'

  let configuration = {
    global: {
      classListModel: {
        root: 'item-list__container',
        header: 'item-list__header_text',
        item: {
          root: 'item-list__item-text',
          description: {
            name: 'item-list_item-name-text',
            root: 'item-list__description-root',
            text: 'item-list__description-text',
          },
          icon: 'item-list__item-icon',
          index: 'item-list__item-index',
          point: 'item-list__item-point',
        },
        pagination: {
          root: 'item-list__pagination',
          option: 'pagination__option',
          arrow: {
            doubleLeft: 'icon-angle-double-left',
            left: 'icon-angle-left',
            right: 'icon-angle-right',
            doubleRight: 'icon-angle-double-right',
          },
        },
      },
      body: {
        enabled: false,
      },
      isVisible: true,
      header: {
        enabled: false,
        text: '',
      },
    },
    endpoint: {
      isStore: true,
      value: stats,
      sortFunction: (a, b) => {},
    },
    pagination: {
      enabled: true,
      pageSize: 10,
      step: {
        limit: 1,
        enabled: true,
      },
    },
    item: {
      clickFunction: () => {},
      bold: {
        enabled: true,
        count: 0,
      },
      name: {
        enabled: true,
        prop: 'name',
      },
      description: {
        enabled: true,
        prop: 'description',
        isHTML: true,
      },
      point: {
        enabled: false,
        prop: 'point',
        isTimeago: false,
      },
      icon: {
        enabled: true,
        prop: 'icon',
      },
      index: {
        enabled: false,
      },
      light: {
        prop: 'light',
      },
    },
  }
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

    <ItemList {configuration} let:items>
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
