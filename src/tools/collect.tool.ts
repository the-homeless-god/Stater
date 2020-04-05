import puppeteer from 'puppeteer'

import IDatabase from '../interfaces/db.interface'
import StatRepository from '../repositories/stat.repository'
import IStat from '../interfaces/stat.interface'
import { parser } from './parser.tool'
import Logger from 'node-crud-kit/lib/tools/logger.tool'
var cron = require('node-cron')

export default class CollectTool {
  db: IDatabase
  statRepository: StatRepository

  constructor(db: IDatabase) {
    this.db = db
    this.statRepository = new StatRepository(db.Stat)
  }

  init = async () => {
    cron.schedule('*/15 * * * *', async () => {
      let stats: IStat[] = await this.statRepository.getAll()

      const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--mute-audio', '--disable-gpu'],
      })

      const page = await browser.newPage()

      await page.goto(
        'https://en.wikipedia.org/wiki/2019%E2%80%9320_coronavirus_pandemic_by_country_and_territory',
        { waitUntil: 'load' },
      )

      let actStats = await page.evaluate(parser)

      Logger.log(`parsed ${actStats.length} statistics`)
      await browser.close()

      if (actStats && actStats.length > 0) {
        actStats.map(async act => {
          let existData = stats.find(stat => stat.country === act.country)
          if (existData) {
            await this.statRepository.update({
              id: existData.id,
              country: existData.country,
              icon: act.icon,
              case: act.case,
              death: act.death,
              recov: act.recov,
              time: new Date(),
            })
          } else {
            await this.statRepository.add(act)
          }
        })
      }
    })
  }
}
