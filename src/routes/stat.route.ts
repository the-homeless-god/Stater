import ServerTool from 'node-crud-kit/lib/tools/server.tool'
import IDatabase from '../interfaces/db.interface'
import StatRepository from '../repositories/stat.repository'
import IStat from '../interfaces/stat.interface'
import BaseRouter from 'node-crud-kit/lib/bases/base.router'

export default class StatRouter extends BaseRouter<IStat> {
  db: IDatabase
  repository: StatRepository

  constructor(db: IDatabase) {
    super(db)

    this.db = db
    this.repository = new StatRepository(this.db.Stat)
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
