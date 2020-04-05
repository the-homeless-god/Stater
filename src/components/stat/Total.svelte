<script>
  import ItemList from 'svelte-item-list/dist/index.js'
  import Box from '../common/Box.svelte'
  import CommonTool from 'node-crud-kit/lib/tools/common.tool'

  import { totalStat, stats, dictionary } from '../../stores/store.ts'

  stats.subscribe(value => {
    if (value && value.length > 0) {
      let item = value.reduce(
        (accum, curr) => {
          accum.case += curr.case
          accum.death += curr.death
          accum.recov += curr.recov
          accum.count += 1
          return accum
        },
        {
          title: 'Total statistic for world',
          count: 0,
          case: 0,
          death: 0,
          recov: 0,
          desc: '',
        },
      )

      let items = [
        CommonTool.convertNumberStr(
          item.count,
          $dictionary.total.items[0].forms,
        ),
        CommonTool.convertNumberStr(
          item.case,
          $dictionary.total.items[1].forms,
        ),
        CommonTool.convertNumberStr(
          item.death,
          $dictionary.total.items[2].forms,
        ),
        CommonTool.convertNumberStr(
          item.recov,
          $dictionary.total.items[3].forms,
        ),
      ]

      const getSubRow = (emoji, left, right) => {
        let classAttr = 'class="total-stat flex-center"'
        return `<span ${classAttr} >${emoji}<b>${left}</b>&nbsp<i>${right}</i></span>`
      }

      item.desc = `
            ${getSubRow('🔄 ', item.count, items[0])}
            ${getSubRow('💥 ', item.case, items[1])}
            ${getSubRow('❌ ', item.death, items[2])}
            ${getSubRow('✅ ', item.recov, items[3])}
      `

      totalStat.set(item)
    }
  })
</script>

<style>
  :global(.total-stat span) {
    margin: 10px;
  }

  .total-title {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .total-stat {
    padding-top: 5px;
  }

  :global(.total-stat-block) {
    display: flex;
  }
</style>

{#if $totalStat}
  <Box classList={'full-width total-stat-block'}>
    <b class="total-title">{$dictionary.total.title}</b>
    <div class="total-stat flex-center full-width">
      {@html $totalStat.desc}
    </div>
  </Box>
{/if}
