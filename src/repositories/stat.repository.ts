import BaseRepository from 'node-crud-kit/lib/bases/base.repository'
import IStat from '../interfaces/stat.interface'
import { Op } from 'sequelize'
import IDatabase from '../interfaces/db.interface'

export default class StatRepository extends BaseRepository<IStat> {
  db: any

  public constructor(db: any) {
    super(db)
    this.db = db
  }

  public add = async (stat: IStat) => {
    return this.db.create({
      icon: stat.icon,
      case: stat.case,
      country: stat.country,
      death: stat.death,
      recov: stat.recov,
      time: new Date(),
    })
  }

  public update = async (item: IStat) => {
    return this.db.update(item, { where: { id: item.id } })
  }

  public cleanupAll = async () => {
    return this.db.destroy({
      where: {
        id: {
          [Op.gte]: 0,
        },
      },
    })
  }
}
