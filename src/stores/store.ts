import { writable, Writable } from 'svelte/store'
import GeneratorTool from '../tools/generator.tool'
import IStat from '../interfaces/stat.interface'

export const stats: Writable<IStat[]> = writable(GeneratorTool.genEmptyStats())
