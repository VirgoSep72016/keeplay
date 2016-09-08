const express = require('express')
const server = express()

const port = 8080

class Server {
  constructor() {
    server.use(express.static('build'))
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
