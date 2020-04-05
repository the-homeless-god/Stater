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
}
