import { SECOND } from './config'
import { EventEmitter } from 'events'

const defaultSetting = {
  goalTimes: 8,
  workoutTime: 20 * SECOND,
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

  start() {
    const { goalTimes, workoutTime, restTime } = this.setting
    let times = 0

    this.timer = Interval(() => {
      // hmmmmmmm
    }, SECOND)
  }

  stop() {
    clearInterval(this.timer)
    this.timer = null
    alert('肥宅，訓練就該專心訓練啊，重來吧！')
  }
}
