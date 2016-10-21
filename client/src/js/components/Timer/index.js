const timers = {}
timers['tabata'] = require('./Tabatimer').default
timers['tomato'] = require('./Tomato').default

export default {
  get(type) {
    return timers[type]
  }
}
