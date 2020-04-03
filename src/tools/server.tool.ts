import morgan from 'morgan'
import express from 'express'
import * as sapper from '@sapper/server'
import compression from 'compression'
import ServerTool from 'node-crud-kit/lib/tools/server.tool'
import AppConfiguration from './config.tool'
const configuration = AppConfiguration.getInstance()

export const initServer = (server: any) => {
  ServerTool.handleServerErrors(server)

  server.listen(configuration.settings.port)
}

export const initModules = (app: any) => {
  app.set('port', configuration.settings.port)
  app.use(morgan('combined'))
  app.use(express.static('public'))
  app.use(compression({ threshold: 0 }))
  app.use(sapper.middleware())

  ServerTool.handleAppErrors(app)
}
