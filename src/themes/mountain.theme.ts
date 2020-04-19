import ITheme from '../interfaces/theme.interface'

export default class MountainTheme implements ITheme {
  constructor(localePrefix: string = '') {
    switch (localePrefix) {
      case 'ru':
        this.short = 'mountain'
        this.prefix = '🗻 Скалы'
        break

      case 'en':
      default:
        this.short = 'mountain'
        this.prefix = '🗻 Mountain'
        break
    }
  }

  short: string
  prefix: string
}
