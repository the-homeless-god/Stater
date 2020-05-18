const VKBotAPI = require('node-vk-bot-api')

export default class VKBot {
  token: string
  bot: any
  configuration: {
    start: {
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
    }

    this.bot = new VKBotAPI(token)

    this.bot.startPolling()
  }

  startHandler = () => {
    this.bot.command(this.configuration.start.command, (ctx: any) => {
      console.log(ctx)
      ctx.reply(this.configuration.start.text)
    })
  }
}
