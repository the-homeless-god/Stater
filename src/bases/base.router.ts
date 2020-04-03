import IRepository from '../interfaces/repository.interface'
import AppConfiguration from '../tools/config.tool'
import EmptyRepository from '../empties/empty.repository'
import IDatabase from '../interfaces/db.interface'

export default class BaseRouter<T> {
  public constructor(db: IDatabase) {
    this.db = db
    this.configuration = AppConfiguration.getInstance()
    this.repository = new EmptyRepository(db)
  }

  db: IDatabase
  configuration: AppConfiguration
  repository: IRepository<T>
}
