import ITheme from '../interfaces/theme.interface'

export default class LightTheme implements ITheme {
  constructor(localePrefix: string = '') {
    switch (localePrefix) {
      case 'ru':
        this.short = 'light'
        this.prefix = 'Светлая'
        break

      case 'en':
      default:
        this.short = 'light'
        this.prefix = 'Light'
        break
    }
  }

  short: string
  prefix: string
}
