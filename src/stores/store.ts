import { writable, Writable } from 'svelte/store'
import GeneratorTool from '../tools/generator.tool'
import IStat from '../interfaces/stat.interface'

export const stats: Writable<IStat[]> = writable(GeneratorTool.genEmptyStats())
export const totalStat: Writable<any> = writable(null)

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

    item.desc = `
             <span>🔄 <b>${item.count}</b> <i>countries</i></span>
             <span>💥 <b>${item.case}</b> <i>cases</i></span>
             <span>❌ <b>${item.death}</b> <i>deaths</i></span>
             <span>✅ <b>${item.recov}</b> <i>recovers</i></span>
    `

    totalStat.set(item)
  }
})
