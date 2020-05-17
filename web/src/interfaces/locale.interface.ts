import ITheme from './theme.interface'

export default interface ILocale {
  short: string
  prefix: string
  author: {
    name: string
    link: string
  }
  title: string
  subtitle: string
  total: {
    title: string
    items: { forms: string[] }[]
  }
  language: {
    change: string
  }
  theme: {
    change: string
    dark: ITheme
    light: ITheme
    mountain: ITheme
  }
  visit: {
    now: string
    total: string
  }
  item: {
    count: {
      change: string
      forms: string[]
    }
  }
  search: {
    text: string
  }
  nav: {
    main: {
      title: string
      link: string
    }
    graph: {
      title: string
      link: string
    }
  }
}
