import ILocale from '../interfaces/locale.interface'
import DarkTheme from '../themes/dark.theme'
import LightTheme from '../themes/light.theme'
import MountainTheme from '../themes/mountain.theme'

export default class EnglishLocale implements ILocale {
  short = 'en'
  prefix = '🇺🇸English'
  author = {
    name: 'Project author',
    link: 'https://vk.com/the_homeless_god',
  }
  title = 'COVID-19'
  subtitle = 'COVID-19 statistic'
  total = {
    title: 'World statistic',
    items: [
      { forms: ['country', 'countries', 'countries'] },
      { forms: ['case', 'cases', 'cases'] },
      { forms: ['death', 'deaths', 'deaths'] },
      { forms: ['recovery', 'recoveries', 'recoveries'] },
    ],
  }
  language = {
    change: 'Language',
  }
  theme = {
    change: 'Тема оформления',
    dark: new DarkTheme('en'),
    light: new LightTheme('en'),
    mountain: new MountainTheme('en')
  }
  visit = {
    now: 'Online',
    total: 'Total',
  }
}
