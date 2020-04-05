import ILocale from '../interfaces/locale.interface'

export default class RussianLocale implements ILocale {
  short = 'ru'
  prefix = '🇷🇺Русский'
  author = {
    name: 'Создатель проекта',
    link: 'https://vk.com/the_homeless_god',
  }
  title = 'COVID-19'
  subtitle = 'COVID-19 статистика'
  total = {
    title: 'Мировая статистика',
    items: [
      { forms: ['страна', 'страны', 'стран'] },
      { forms: ['случай', 'случая', 'случаев'] },
      { forms: ['смерть', 'смерти', 'смертей'] },
      { forms: ['выздоравление', 'выздоравления', 'выздоравлений'] },
    ],
  }
  language = {
    change: 'Язык',
  }
}
