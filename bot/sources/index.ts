console.log('Bot has been started')

import dotenv from 'dotenv'
import ICQBot from './bots/icq.bot'
import VKBot from './bots/vk.bot'
dotenv.config()

const initBots = () => {
  new ICQBot(process.env.ICQ_BOT_TOKEN!)
  new VKBot(process.env.VK_BOT_TOKEN!)
}

initBots()
