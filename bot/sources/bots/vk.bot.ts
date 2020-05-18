const VKBotAPI = require('node-vk-bot-api')

export default class VKBot {
  token: string
  bot: any
  configuration: {
    start: {
      text: string
      command: string
    }
    update: {
      text: string
      command: string
    }
  }

  constructor(token: string) {
    this.token = token
    this.configuration = {
      start: {
        text: `
        Добро пожаловать!
        Здесь Вы можете узнать последнюю информацию о статистике по COVID-19
        Вся информация берётся из https://corona.notify.wtf
      `,
        command: '/start',
      },
      update: {
        text: `
        Добро пожаловать!
        Здесь Вы можете узнать последнюю информацию о статистике по COVID-19
        Вся информация берётся из https://corona.notify.wtf
      `,
        command: '/start',
      },
    }

    this.bot = new VKBotAPI(token)
    this.startHandler()
    this.bot.startPolling()
  }

  startHandler = () => {
    this.bot.command(this.configuration.start.command, (ctx: any) => {
      ctx.reply(this.configuration.start.text)
    })

    this.bot.command(this.configuration.update.command, (ctx: any) => {
      ctx.reply(this.configuration.update.text)
    })
  }
}
