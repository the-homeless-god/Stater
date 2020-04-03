export default interface IApi {
  enabled: boolean
  path: string
  type: string
  option?: any
  routeCallback: (db: any, req: any, res: any) => void
}
