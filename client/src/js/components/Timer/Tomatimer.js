import { EventEmitter } from 'events'
import { MINUTE } from './config'
import clock from './class/Clock'
import timer from './class/Timer'

const defaultSetting = {
  workTime: 25 * MINUTE,
  restTime: 5 * MINUTE
}

let _this

class Tomatimer {
  constructor() {

    this.setting = Object.assign({}, defaultSetting)
    _this = this
  }

  set(options) {
    this.setting = Object.assign({}, defaultSetting, options)
  }

  reset() {
    this.setting = Object.assign({}, defaultSetting)
  }

  cancel() {
    timer.broken()
  }

  startWork(options = { onTick: () => {}, onTimeUp: () => {} }) {
    _this.run(options.onTimeUp, options.onTick, this.setting.workTime)
  }

  startRest(options = { onTick: () => {}, onTimeUp: () => {} }) {
    _this.run(options.onTimeUp, options.onTick, this.setting.restTime)
  }

  run(onTimeUp, onTick, goalTime ) {
    const endTimestamp = clock.now() + goalTime

    timer.on('time_up', () => {
        onTimeUp()
        timer.removeListener('tick', ()=>{console.log('removeListener-tick')})
        timer.removeListener('time_up', ()=>{console.log('removeListener-time_up')})
    })

    timer.on('tick', onTick)

    timer.run(endTimestamp)
  }
}

const tomatimer = new Tomatimer()

export default {
  set: tomatimer.set,
  reset: tomatimer.reset,
  cancel: tomatimer.cancel,
  startWork: tomatimer.startWork,
  startRest: tomatimer.startRest
}
