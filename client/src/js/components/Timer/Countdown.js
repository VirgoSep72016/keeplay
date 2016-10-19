import React, { Component } from 'react'
import cx from 'classnames'

export default class Countdown extends Component {
  constructor() {

  }

  render() {
    const { isRun } = this.props



    return (
      <div className={ cx({ isShow: isRun }) }>
        <span>Time:</span>
        <span>{ time }</span>
      </div>
    )
  }
}
