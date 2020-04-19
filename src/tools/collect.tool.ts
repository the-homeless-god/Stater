import puppeteer from 'puppeteer'

import IDatabase from '../interfaces/db.interface'
import StatRepository from '../repositories/stat.repository'
import IStat from '../interfaces/stat.interface'
import { parser } from './parser.tool'
import Logger from 'node-crud-kit/lib/tools/logger.tool'
import SocketTool from './socket.tool'
var cron = require('node-cron')

export default class CollectTool {
  db: IDatabase
  statRepository: StatRepository

  constructor(db: IDatabase) {
    this.db = db
    this.statRepository = new StatRepository(db.Stat)
  }

  parse = async (withCleanup: boolean = false) => {
    let stats: IStat[] = await this.statRepository.getAll()

    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--mute-audio',
        '--disable-gpu',
        '--single-process',
      ],
    })

    const page = await browser.newPage()

    await page.setDefaultNavigationTimeout(0)

    await page.goto(
      'https://en.wikipedia.org/wiki/2019%E2%80%9320_coronavirus_pandemic_by_country_and_territory',
      { waitUntil: 'load' },
    )

    let actStats = await page.evaluate(parser)

    Logger.log(`parsed ${actStats.length} statistics`)
    await browser.close()

    if (withCleanup && actStats.length > 0) {
      await this.statRepository.cleanupAll()
    }

    for (let i = 0; i < actStats.length; i++) {
      let existData = stats.find(stat => stat.country === actStats[i].country)
      if (existData) {
        await this.statRepository.update({
          id: existData.id,
          country: existData.country,
          icon: actStats[i].icon,
          case: actStats[i].case,
          death: actStats[i].death,
          recov: actStats[i].recov,
          time: new Date(),
        })
      } else {
        await this.statRepository.add(actStats[i])
      }
    }

    let socketTool = SocketTool.getInstance()
    if (socketTool.socket) {
      socketTool.initStats()
    }
  }

  init = async () => {
    cron.schedule('*/35 * * * *', async () => {
      await this.parse(false)
    })
    cron.schedule('0 0 0 * * *', async () => {
      await this.parse(true)
    })
  }
}
