import ILocale from '../interfaces/locale.interface'
import DarkTheme from '../themes/dark.theme'
import LightTheme from '../themes/light.theme'
import MountainTheme from '../themes/mountain.theme'

export default class EnglishLocale implements ILocale {
  short = 'en'
  prefix = 'English'
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
    change: 'Site theme',
    dark: new DarkTheme('en'),
    light: new LightTheme('en'),
    mountain: new MountainTheme('en'),
  }
  visit = {
    now: 'Online',
    total: 'Total',
  }
  item = {
    count: {
      change: 'Country count',
      forms: ['country', 'countries', 'countries'],
    },
  }
  search = {
    text: 'Search by country name',
  }
  nav = {
    main: {
      title: 'Statistic',
      link: '/',
    },
    graph: {
      title: 'Charts',
      link: '/chart',
    },
    bot: {
      title: 'Bots',
      link: '/bot',
    },
  }
}
