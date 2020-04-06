export default class SocketTool {
  static getInstance() {
    if (!SocketTool.instance) {
      SocketTool.instance = new SocketTool()
    }
    return SocketTool.instance
  }

  socket: any
  initStats: any

  private static instance: SocketTool
}
