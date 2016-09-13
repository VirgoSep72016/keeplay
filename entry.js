const server = require('./server')

const isDev = process.env.NODE_ENV === 'dev'

if (isDev) {
  server.dev()
} else {
  server.run()
}

