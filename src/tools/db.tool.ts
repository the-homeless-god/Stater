import Sequelize from 'sequelize'
import Logger from 'node-crud-kit/lib/tools/logger.tool'
import StatEntity from '../entities/stat.entity'

import AppConfiguration from '../tools/config.tool'
const configuration = AppConfiguration.getInstance()

Logger.log(`db host: ${process.env.DB_HOST}`)

export const connect = () => {
  const db = configuration.settings.database
  Logger.log(`db host: ${db.host}`)

  // const sequelize = new Sequelize.Sequelize(db.url)
  const sequelize = new Sequelize.Sequelize(db.name, db.user, db.password, {
    dialect: db.dialect,
    host: db.host,
    port: db.port,
    define: {
      timestamps: false,
    },
  })

  const opts = db.options

  const Stat = sequelize.define(db.table.stat, StatEntity, opts)

  sequelize
    .sync()
    .then((result: any) => {
      Logger.log(db.successMessage)
    })
    .catch((err: any) => Logger.log(err))

  return {
    Stat: Stat,
  }
}
