import { writable, Writable } from 'svelte/store'
import GeneratorTool from '../tools/generator.tool'
import IStat from '../interfaces/stat.interface'
import ILocale from '../interfaces/locale.interface'
import EnglishLocale from '../locales/english.locale'

export const stats: Writable<IStat[]> = writable(GeneratorTool.genEmptyStats())
export const totalStat: Writable<any> = writable(null)
export const dictionary: Writable<ILocale> = writable(new EnglishLocale())
