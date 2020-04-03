import IStat from '../interfaces/stat.interface'

export default class GeneratorTool {
  static genEmptyStats = (): IStat[] => {
    return []
  }
}
