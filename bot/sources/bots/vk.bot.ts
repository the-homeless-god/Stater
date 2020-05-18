import IButton from '../interfaces/button.interface'
import { getSocialButtons } from '../helpers/button.helper'
import SocialEnum from '../enums/social.enum'
import ButtonEnum from '../enums/button.enum'
import {
  getCountries,
  calcByProp,
  getTopTenByProp,
} from '../helpers/api.helper'

const VKBotAPI = require('node-vk-bot-api')
const VKMarkup = require('node-vk-bot-api/lib/markup')

export default class VKBot {
  token: string
  bot: any

  buttons: IButton[]

  constructor(token: string) {
    this.token = token

    this.buttons = getSocialButtons(SocialEnum.VK)

    this.bot = new VKBotAPI(token)
    this.startHandler()
    this.menuHandler()
    this.buttonHandler()
    this.bot.startPolling()
  }

  menuHandler = () => {
    let commandList = ['/update', '/menu']

    commandList.forEach((command) => {
      this.bot.command(command, (ctx: any) => {
        ctx.reply('Выберите пункт меню', null, this.getButtonPreview())
      })
    })
  }

  getButtonPreview = () => {
    return VKMarkup.keyboard([
      [this.buttons[0]],
      [this.buttons[1]],
      [this.buttons[2]],
      [this.buttons[3]],
      [this.buttons[4]],
      [this.buttons[5]],
    ])
  }

  handleButton = (label: string, button: any) => {
    this.bot.command(label, async (ctx: any) => {
      try {
        //@ts-ignore
        const command = JSON.parse(button.action.payload)
        if (command) {
          let countries = []
          let response = null
          let output = ''

          switch (command.operation) {
            case ButtonEnum.caseCount:
            case ButtonEnum.deathCount:
            case ButtonEnum.recoveryCount:
              countries = await getCountries()
              response = calcByProp(countries, command.property)
              output = `Всего ${command.prefix} в мире: ${response}`

              ctx.reply(output)

              break
            case ButtonEnum.topTenByCase:
            case ButtonEnum.topTenByDeath:
            case ButtonEnum.topTenByRecovery:
              countries = await getCountries()
              response = getTopTenByProp(countries, command.property)
              output = response.join(', ')

              ctx.reply(output)
              break
            default:
              break
          }
        }
      } catch (ex) {
        console.log(ex)
      }
    })
  }

  buttonHandler = () => {
    this.buttons.forEach((button) => {
      //@ts-ignore
      this.handleButton(button.action.label, button)
      this.handleButton(
        //@ts-ignore
        `[club195478597|@covidstatbot] ${button.action.label}`,
        button,
      )
    })
  }

  startHandler = () => {
    this.bot.command('/start', (ctx: any) => {
      ctx.reply(`
        Добро пожаловать!
        Здесь Вы можете узнать последнюю информацию о статистике по COVID-19
        Вся информация берётся из https://corona.notify.wtf
        Напишите "/update" или "/menu" чтобы получить меню
      `)

      console.log(ctx)
    })
  }
}
