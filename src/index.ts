// imports
import express, { Application } from 'express'
import routes from './ router'
import clustering from './cluster/cluster'

clustering(() => {
  // app init
  const app: Application = express()

  // middleware
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/', routes)

  app.listen(process.env.PORT || '3000', () => { console.log('http://localhost:3000') })
})
