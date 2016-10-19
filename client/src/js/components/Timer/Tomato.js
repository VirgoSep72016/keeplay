import React, { Component } from 'react'
import { MINUTE } from './config'
import cx from 'classnames'

import tomatimer from './Tomatimer'

export default class Tomato extends Component {
  constructor() {
    super()

    this.state = {
      m: 0,
      s: 0,
      isRun: false,
      isWorkdone: false,
      todos: ['a', 'b', 'c']
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
      onTick: (time) => {
        this.setStatae({
          m: time / 60,
          s: time % 60,
          isRun: true

        })
      },
      onTimeUp: () => {
        this.setState({
          isWorkdone: true
        })
      }
    })
  }

  startRest() {
    const todos = [].push(this.state.todos)
    const todo = this.refs['todo'].value
    this.setState({
      todos: todos.push(todo)
    })

  }

  cancel() {}

  reset() {}

  render() {
    const { m, s, isRun, isWorkdone, todos } = this.state
    const time = `${m}:${s}`

    const todoList = todos.map((value, index) => {
      return <p key={`${value}_${index}`} >{ value }</p>
    })

    return (
      <div>
        <div className={ cx({ isShow: isRun }) }>
          <span>Work Time</span>
          <input ref='worktime' type='text' defaultValue='10' />
          <span>Rest Time</span>
          <input ref='resttime' type='text' defaultValue='10' />
        </div>
        <div className={ cx({ isShow: isWorkdone }) }>
          <span>Enter Content</span>
          <input ref='todo' type='text' defaultValue='' />
          <button onClick={ this.startRest }>OK</button>
        </div>
        <div className={ cx({ isShow: isRun }) }>
          <span>Time:</span>
          <span>{ time }</span>
        </div>
        <div>
          <span>Content, TODO</span>
          <div>
            { todoList }
          </div>
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
