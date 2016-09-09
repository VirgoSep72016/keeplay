const express = require('express')
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')


const compiler = webpack(webpackConfig);
const server = express()

const port = 8080

class Server {
  constructor() {
    server.use(express.static('build'))


    server.use(webpackDevMiddleware(compiler, {
        noInfo: true, publicPath: webpackConfig.output.publicPath
    }));

    server.use(webpackHotMiddleware(compiler));

    server.get('/', (req, res) => {
      res.sendFile(__dirname + 'index.html');
    })
  }

  run() {
    server.listen(port, () => {
      console.log(`Example app listening on port ${port}!`)
    });
  }
}

module.exports = new Server
