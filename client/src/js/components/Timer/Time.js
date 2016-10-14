class Time {
  constructor() {
    this.boxs = {}
  }

  now() {
    return Date.now()
  }

  set(name, timestamp) {
    if( name && ! this.boxs[name] && timestamp && timestamp > this.now() ) {
      this.boxs[name] = timestamp
    }
  }

  get(name) {
    if( this.boxs[name] ) {
      return this.boxs[name]
    }
  }
}

export default new Time()
