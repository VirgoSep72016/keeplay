const timers = {}
timers['tabata'] = require('./Tabata').default
timers['tomato'] = require('./Tomato').default

export default {
  get(type) {
    return timers[type]
  }
}
