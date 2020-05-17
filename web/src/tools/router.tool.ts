import AppConfiguration from './config.tool'
import { connect } from './db.tool'
import express from 'express'

import Route from '../classes/route.class'
import RouteEnum from '../enums/route.enum'
import RequestEnum from '../enums/request.enum'
import Logger from 'node-crud-kit/lib/tools/logger.tool'
import StatRouter from '../routes/stat.route'
import CollectTool from './collect.tool'
import IDatabase from '../interfaces/db.interface'
import VisitRouter from '../routes/visit.route'

export default class RouterTool {
  db: IDatabase = connect()
  statRouter = new StatRouter(this.db)
  visitRouter = new VisitRouter(this.db)
  collectTool = new CollectTool(this.db)

  configuration = AppConfiguration.getInstance()

  public router = express.Router()

  setupRoute = (route: Route) => {
    if (route.enabled) {
      Logger.log(route.path)

      switch (route.type) {
        case RequestEnum.get:
          this.router.get(route.path, (req: any, res: any) => {
            Logger.log(route)
            route.routeCallback(req, res, route.option)
          })
          break

        case RequestEnum.post:
          this.router.post(route.path, (req: any, res: any) => {
            Logger.log(route)
            route.routeCallback(req, res, route.option)
          })
          break
      }
    }
  }

  constructor() {
    this.setupRoute(
      new Route({
        enabled: true,
        routeEnum: RouteEnum.status,
        type: RequestEnum.get,
        path: RouteEnum.status,
        option: true,
        routeCallback: (req, res) => {
          res.send(true)
        },
      }),
    )

    this.initStatRoutes()

    this.collectTool.init()
  }

  initSocket = (server: any) => {
    this.visitRouter.initSocket(server)
  }

  initStatRoutes = () => {
    this.setupRoute(
      new Route({
        enabled: true,
        path: RouteEnum.getAllStats,
        routeEnum: RouteEnum.getAllStats,
        type: RequestEnum.get,
        routeCallback: this.statRouter.getAll,
      }),
    )

    this.setupRoute(
      new Route({
        enabled: true,
        path: RouteEnum.getStat,
        routeEnum: RouteEnum.getStat,
        type: RequestEnum.get,
        routeCallback: this.statRouter.get,
      }),
    )
  }
}
