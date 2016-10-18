import { SECOND } from '../config'
import { EventEmitter } from 'events'

class Clock extends EventEmitter {
  constructor() {
    super()
    this.timer = setInterval(() => {
      this.emit('change', this.now())
    }, SECOND)
  }

  now() {
    return Date.now()
  }
}

export default new Clock()
