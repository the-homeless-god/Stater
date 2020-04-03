import ServerTool from 'node-crud-kit/lib/tools/server.tool'
import AppConfiguration from '../tools/config.tool'
import BaseRouter from '../bases/base.router'
import IDatabase from '../interfaces/db.interface'
import StatRepository from '../repositories/stat.repository'
import IStat from '../interfaces/stat.interface'

export default class StatRouter extends BaseRouter<IStat> {
  constructor(db: IDatabase) {
    super(db)

    this.db = db
    this.repository = new StatRepository(this.db.Stat)
    this.configuration = AppConfiguration.getInstance()
  }

  get = async (req: any, response: any) => {
    const { id } = req.query

    if (ServerTool.checkParams(response, [id])) {
      ServerTool.sendStatus(this.repository.get(id), response)
    }
  }

  getAll = async (req: any, response: any) => {
    ServerTool.sendStatus(this.repository.getAll(), response)
  }
}
