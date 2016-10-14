import Time from './Time'

const second = 1000

const defaultSetting = {
  times: 8,
  workoutTime: 20, // second
  releaxTime: 10 // second
}

class TabaTimer {
  constructor() {
    this.setting = Object.assign({}, defaultSetting)
    this.timer = null
  }

  set(options) {
    this.setting = Object.assign({}, defaultSetting, options)
  }

  reset() {
    this.setting = Object.assign({}, defaultSetting)
  }

  start() {
    this.timer = setInterval(() => {

      // hmmmmmmm


    }, second)
  }

  stop() {
    clearInterval(this.timer)
    this.timer = false
    alert('肥宅，訓練就該專心訓練啊，重來吧！')
  }
}
