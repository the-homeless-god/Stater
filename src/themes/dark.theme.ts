import ITheme from '../interfaces/theme.interface'

export default class DarkTheme implements ITheme {
  constructor(localePrefix: string = '') {
    switch (localePrefix) {
      case 'ru':
        this.short = 'dark'
        this.prefix = 'Тёмная'
        break

      case 'en':
      default:
        this.short = 'dark'
        this.prefix = 'Dark'
        break
    }
  }

  short: string
  prefix: string
}
