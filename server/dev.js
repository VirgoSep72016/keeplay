const express = require('express')
const server = express()

const webpack = require('webpack')
const webpackConfig = require('../webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const compiler = webpack(webpackConfig)

const browserSync = require('browser-sync').create()

const port = 8080

class Server {
  constructor() {
    server.use(express.static('build'))

    server.use(webpackDevMiddleware(compiler, {
      noInfo: false,
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true
      }
    }))

    server.use(webpackHotMiddleware(compiler))

    server.get('/', (req, res) => {
      res.sendFile(__dirname + 'index.html')
    })
  }

  run() {
    server.listen(port, () => {
      console.log(`webpack dev server listening on port ${port}!`)
      browserSync.init({
        open: 'local',
        ui: false,
        notify: false,
        proxy: `localhost:${port}`,
        files: ['./client/*.pug'],
        port: 3000
      })
      console.log(`browserSync is running on prot 3000`)
    })
  }
}

module.exports = new Server
