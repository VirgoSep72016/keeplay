import React, { Component } from 'react'
import { MINUTE } from './config'
import cx from 'classnames'

import tomatimer from './Tomatimer'

export default class Tomato extends Component {
  constructor() {
    super()

    this.state = {
      isRun: false
    }

    this.startWork = this.startWork.bind(this)
    this.startRest = this.startRest.bind(this)
    this.cancel = this.cancel.bind(this)
    this.reset = this.reset.bind(this)
  }

  startWork() {
    const workTime = this.refs['worktime'].value
    const restTime = this.refs['resttime'].value

    tomatimer.set({
      workTime: workTime * MINUTE,
      restTime: restTime * MINUTE
    })

    tomatimer.startWork({
      onTick: () => {

      },
      onTimeUp: () => {

      }
    })
  }

  startRest() {}

  cancel() {}

  reset() {}

  render() {
    return (
      <div>
        <div className={ cx({ isShow: true }) }>
          <span>Work Time</span>
          <input ref='worktime' type='text' defaultValue='10' />
          <span>Rest Time</span>
          <input ref='resttime' type='text' defaultValue='10' />
        </div>
        <div className={ cx({ isShow: true }) }>
          <span>Enter Content</span>
          <input type='text' defaultValue='' />
          <button>OK</button>
        </div>
        <div className={ cx({ isShow: true } )}>
          <span>Time:</span>
          <span>10:00</span>
        </div>
        <div>
          <span>Content, TODO</span>
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
