import React, { Component } from 'react'
import { MINUTE, SECOND } from './config'
import cx from 'classnames'

import tomatimer from './Tomatimer'

export default class Tomato extends Component {
  constructor() {
    super()

    this.state = {
      s: 0,
      rounds: 0,
      isRun: false,
      isRoundFinish: false
    }

    this.interval = null

    this.startWork = this.startWork.bind(this)
    this.tick = this.tick.bind(this)
    this.reset = this.reset.bind(this)

    this.reset()
  }

  componentWillUpdate(nextProps, nextState) {
    if (! this.interval) {
      this.endTime = this.now() + this.workTime

      this.tick()
      this.interval = setInterval(this.tick, SECOND)
    }
  }


  reset() {
    if (! this.state.isRun) {
      this.workTime = 0
      this.restTime = 0
      this.rounds = 0
      this.endTime = 0
    }
  }

  startWork() {
    if (this.state.isRun) return

    this.workTime = Number(this.refs['worktime'].value)
    this.restTime = Number(this.refs['resttime'].value)
    this.rounds = Number(this.refs['rounds'].value)

    this.setState({
      isRun: true
    })
  }

  tick() {
    const { isRun, isRoundFinish } = this.state

    const timeDelta = this.endTime - this.now()

    if ( timeDelta >= 0) {
      this.setState({
        s: timeDelta
      })

      return
    }

    if (this.rounds > 0) {
      if (isRoundFinish) {
        this.restart()

        return
      }

      this.finish()

      return
    }

    this.done()
  }

  restart() {
    this.endTime = this.now() + this.workTime
    this.rounds --

    this.setState({
      s: this.workTime,
      isRoundFinish: false
    })
  }

  finish() {
    this.endTime = this.now() + this.restTime

    this.setState({
      s: this.restTime,
      isRoundFinish: true
    })
  }

  done() {
    this.setState({
      isRun: false,
      isRoundFinish: false
    })
    clearInterval(this.interval)
    this.interval = null
  }

  now() {
    return Math.floor(Date.now() / SECOND)
  }

  pad(num) {
    return num < 10 ? '0' + num : num
  }

  cancel() {
    if (this.state.isRun) {
      this.done()
    }
  }

  render() {
    const { s, isRun } = this.state
    const time = this.pad(s)

    return (
      <div>
        <div className={ cx('timer-dashboard', { 'is-show': ! isRun }) }>
          <span>Work Time</span>
          <input ref='worktime' type='text' defaultValue='5' />
          <span>Second</span>

          <span>Rest Time</span>
          <input ref='resttime' type='text' defaultValue='3' />
          <span>Second</span>

          <span>Rounds</span>
          <input ref='rounds' type='text' defaultValue='5' />
          <span>Times</span>
        </div>
        <div className={ cx('timer-screan', { 'is-show': isRun }) }>
          <span>Rounds: { this.rounds } </span>
          <span>Time: { time }</span>
        </div>
        <div>
          <button onClick={ this.startWork }>Start</button>
          <button onClick={ this.cancel }>Cancel</button>
          <button onClick={ this.reset }>Reset</button>
        </div>
      </div>
    )
  }
}
