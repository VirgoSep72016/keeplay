import React, { Component } from 'react'
import { MINUTE, SECOND } from './config'
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

    this.workTime = 0
    this.restTime = 0
    this.endTime = 0

    this.tick = this.tick.bind(this)
    this.startWork = this.startWork.bind(this)
    this.rest = this.rest.bind(this)
    this.cancel = this.cancel.bind(this)
    this.reset = this.reset.bind(this)
  }

  startWork() {
    this.workTime = this.refs['worktime'].value * MINUTE
    this.restTime = this.refs['resttime'].value * MINUTE

    this.work()
  }

  work() {
    this.endTime = this.now() + this.workTime

    this.setState({
      m: Math.floor(this.workTime / MINUTE),
      s: Math.floor(this.workTime % MINUTE),
      isRun: true
    })

    this.tick()
    this.interval = setInterval(this.tick, SECOND)
  }

  rest() {
    const todos = [].push(this.state.todos)
    const todo = this.refs['todo'].value

    this.setState({
      m: Math.floor(this.restTime / MINUTE),
      s: Math.floor(this.restTime % MINUTE),
      todos: todos.push(todo)
    })

    this.endTime = this.now() + this.restTime
    this.tick()
    this.interval = setInterval(this.tick, SECOND)
  }

  tick() {
    const timeDelta = this.endTime - this.now()
    console.log(timeDelta)

    if (timeDelta >= 0) {
      this.setState({
        m: Math.floor(timeDelta / MINUTE),
        s: Math.floor(timeDelta % MINUTE)
      })

      return
    }

    this.done()
  }

  pad(num) {
    return num < 10 ? '0' + num : num
  }

  now() {
    return Date.now()
  }

  done() {
    this.setState({
      isWorkdone: true
    })
    clearInterval(this.interval)
    this.interval = null
  }

  cancel() {
    if(this.state.isRun) {
      this.done()
    }
  }

  reset() {}

  render() {
    const { m, s, isRun, isWorkdone, todos } = this.state
    const time = `${this.pad(m)}:${this.pad(s)}`

    const todoList = todos.map((value, index) => {
      return <p key={`${value}_${index}`} >{ value }</p>
    })

    return (
      <div>
        <div className={ cx({ 'is-show': ! isRun }) }>
          <span>Work Time</span>
          <input ref='worktime' type='text' defaultValue='10' />
          <span>Minute</span>
          <br/>
          <span>Rest Time</span>
          <input ref='resttime' type='text' defaultValue='10' />
          <span>Minute</span>
        </div>
        <div className={ cx({ 'is-show': isWorkdone }) }>
          <span>Enter Content</span>
          <input ref='todo' type='text' defaultValue='' />
          <button onClick={ this.rest }>OK</button>
        </div>
        <div className={ cx({ 'is-show': isRun }) }>
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
