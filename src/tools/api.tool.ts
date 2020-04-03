import RequestTool from 'node-crud-kit/lib/tools/request.tool'
import RouteEnum from '../enums/route.enum'

export default class ApiTool {
  static getStat = async (id: number) => {
    return await RequestTool.fetchJson(`${RouteEnum.getStat}?id={id}`, true)
  }

  static getStats = async () => {
    return await RequestTool.fetchJson(RouteEnum.getAllStats, true)
  }
}
