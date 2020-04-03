import RequestTool from 'node-crud-kit/lib/tools/request.tool'
import RouteEnum from '../enums/route.enum'

export default class ApiTool {
  static getStat = async (id: number) => {
    return await RequestTool.fetchJson(`${RouteEnum.getStat}?id={id}`, true)
  }

  static getStats = async () => {
    let stats = await RequestTool.fetchJson(RouteEnum.getAllStats, true)

    let output = []

    if (stats && stats.length > 0) {
      output = stats.map((stat: any) => {
        stat.desc = `
        <span>💥 Cases: ${stat.case}</span>
        <span>❌ Deaths: ${stat.death}</span>
        <span>✅ Recov.: ${stat.recov}</span>`
        return stat
      })
    }

    return output
  }
}
