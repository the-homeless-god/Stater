import BaseRepository from '../bases/base.repository'
import IStat from '../interfaces/stat.interface'
import { Op } from 'sequelize'

export default class StatRepository extends BaseRepository<IStat> {
  db: any

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
