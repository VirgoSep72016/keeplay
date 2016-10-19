import { SECOND } from '../config'
import clock from './Clock'
import { EventEmitter } from 'events'

class Timer {
  // TODO:if call setInterval several time.....
  run(endTimestamp) {
    clock.on('change', this.tick, endTimestamp)
  }

  tick(now, endTimestamp) {
    const live = endTimestamp - now
    if (live) {
      this.emit('tick', live)

      return
    }

    this.timeUp()
  }

  timeUp() {
    this.emit('time_up')
    clock.removeListener('change', this.tick)
  }

  broken() {
    this.removeListener('time_up')
    clock.removeListener('change', this.tick)
  }
}

const timer = new Timer()

export default {
  run: timer.run,
  timeUp: timer.timeUp,
  broken: timer.broken
}
