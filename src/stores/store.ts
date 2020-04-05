import { writable, Writable } from 'svelte/store'
import GeneratorTool from '../tools/generator.tool'
import IStat from '../interfaces/stat.interface'
import ILocale from '../interfaces/locale.interface'
import EnglishLocale from '../locales/english.locale'
import ITheme from '../interfaces/theme.interface'
import LightTheme from '../themes/light.theme'

export const stats: Writable<IStat[]> = writable(GeneratorTool.genEmptyStats())
export const totalStat: Writable<any> = writable(null)
export const dictionary: Writable<ILocale> = writable(new EnglishLocale())
export const theme: Writable<ITheme> = writable(new LightTheme('en'))
