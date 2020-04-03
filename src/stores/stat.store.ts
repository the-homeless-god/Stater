import ApiTool from '../tools/api.tool'
import StoreTool from '../tools/store.tool'
import CommonTool from 'node-crud-kit/lib/tools/common.tool'
import { stats } from './store'
import IStat from '../interfaces/stat.interface'
import Logger from 'node-crud-kit/lib/tools/logger.tool'

export default class StatStore {
  static fetchStats = async (isUpdate: boolean = false) => {
    const newVal = await ApiTool.getStats()
    Logger.log(newVal)
    if (CommonTool.isNonEmpty(newVal)) {
      new StoreTool<IStat[]>().addOrUpdate(stats, isUpdate, newVal)
    }
  }
}
