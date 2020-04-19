import Route from '../classes/route.class'

import dotenv from 'dotenv'
dotenv.config()

export default class AppConfiguration {
  static getInstance() {
    if (!AppConfiguration.instance) {
      AppConfiguration.instance = new AppConfiguration()
    }
    return AppConfiguration.instance
  }

  private static instance: AppConfiguration
  public settings: any = {
    port: 8082,
    database: {
      successMessage: 'db connection successful',
      url: process.env.DATABASE_URL,
      host: process.env.DB_HOST,
      name: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      port: process.env.DB_PORT,
      options: {
        charset: process.env.DB_CHARSET,
        collate: process.env.DB_COLLATE,
      },
      table: {
        stat: process.env.DB_STAT_TABLE,
      },
      production: process.env.PRODUCTION_MODE,
      dialect: process.env.DB_DIALECT,
      socketPath: process.env.DB_CLOUD_SQL_CONNECTION_NAME,
    },
  }

  public routes: Route[] = []
}
