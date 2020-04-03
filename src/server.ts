import express from 'express'
import { createServer } from 'http'
import { initModules, initServer } from './tools/server.tool'
import RouterTool from './tools/router.tool'
import listEndpoints from 'express-list-endpoints'

const app = express()

app.use('/', new RouterTool().router)

// !!! REMOVE BEFORE DEPLOY TO PRODUCTION
app.use('/api/all', (req: any, res: any) => res.send(listEndpoints(app)))
initModules(app)

const server = createServer(app)
initServer(server)
