import RequestTool from 'node-crud-kit/lib/tools/request.tool'
import RouteEnum from '../enums/route.enum'
import IStat from '../interfaces/stat.interface'

export default class ApiTool {
  static getStat = async (id: number) => {
    return await RequestTool.fetchJson(`${RouteEnum.getStat}?id={id}`, true)
  }

  static getStats = async () => {
    let stats = await RequestTool.fetchJson(RouteEnum.getAllStats, true)

    let output = []

    if (stats && stats.length > 0) {
      output = stats
        .map((stat: any) => {
          stat.desc = `
        <span>💥 ${stat.case ? stat.case : 0}</span>
        <span>❌ ${stat.death ? stat.death : 0}</span>
        <span>✅ ${stat.recov ? stat.recov : 0}</span>`
          return stat
        })
        .sort((a: IStat, b: IStat) => {
          return b.case - a.case
        })
    }

    return output
  }
}
