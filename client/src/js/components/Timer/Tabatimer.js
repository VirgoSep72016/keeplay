import { EventEmitter } from 'events'
import { SECOND } from './config'
import timer from './Timer'

const defaultSetting = {
  times: 8,
  workTime: 20 * SECOND,
  restTime: 10 * SECOND
}

class Tabatimer {
  constructor() {
    this.setting = Object.assign({}, defaultSetting)
  }

  set(options) {
    this.setting = Object.assign({}, defaultSetting, options)
  }

  reset() {
    this.setting = Object.assign({}, defaultSetting)
  }

  start(endTimestamp) {
    timer(endTimestamp)
  }
}

export default new Tabatimer()
