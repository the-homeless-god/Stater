import BaseRepository from 'node-crud-kit/lib/bases/base.repository'
import IVisit from '../interfaces/visit.interface'
import sequelize from 'sequelize'

export default class VisitRepository extends BaseRepository<IVisit> {
  db: any

  public constructor(db: any) {
    super(db)
    this.db = db
  }

  add = async (stat: IVisit) => {
    return this.db.create({
      time: stat.time,
    })
  }

  getCount = async () => {
    return this.db.findAll({
      attributes: [[sequelize.fn('count', sequelize.col('id')), 'count']],
      raw: true,
    })
  }
}
