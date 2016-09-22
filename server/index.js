const server = require('./server')
const dev_server = require('./dev')

module.exports = {
  run: server.run,
  dev: dev_server.run
}
