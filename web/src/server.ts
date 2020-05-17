import express from 'express'
import { createServer } from 'http'
import { initModules, initServer } from './tools/server.tool'
import RouterTool from './tools/router.tool'
import listEndpoints from 'express-list-endpoints'

import dotenv from 'dotenv'
dotenv.config()

export default class ServerInterop {
  static getInstance() {
    if (!ServerInterop.instance) {
      ServerInterop.instance = new ServerInterop()
    }
    return ServerInterop.instance
  }

  server: any
  app: any
  router: any

  constructor() {
    this.initApp()
    this.hostApp()
    this.router.initSocket(this.server)
  }

  private initApp = () => {
    this.app = express()
    this.router = new RouterTool()
    this.app.use('/', this.router.router)

    // !!! REMOVE BEFORE DEPLOY TO PRODUCTION
    this.app.use('/api/all', (req: any, res: any) =>
      res.send(listEndpoints(this.app)),
    )

    initModules(this.app)
  }

  private hostApp = () => {
    this.server = createServer(this.app)
    initServer(this.server)
  }
  private static instance: ServerInterop
}

ServerInterop.getInstance()
