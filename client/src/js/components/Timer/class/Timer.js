import { SECOND } from '../config'
import clock from './Clock'
import { EventEmitter } from 'events'
let _this

class Timer extends EventEmitter{
  constructor() {
    super()
    _this = this
  }

  // TODO:if call setInterval several time.....
  run(endTimestamp) {
    clock.on('change', _this.tick, endTimestamp)
  }

  tick(now, endTimestamp) {
    const live = endTimestamp - now
    if (live) {
      this.emit('tick', live)

      return
    }

    _this.timeUp()
  }

  timeUp() {
    this.emit('time_up')
    clock.removeListener('change', _this.tick)
  }

  broken() {
    this.removeListener('time_up')
    clock.removeListener('change', _this.tick)
  }
}

const timer = new Timer()

export default {
  on: timer.on,
  run: timer.run,
  timeUp: timer.timeUp,
  broken: timer.broken
}
