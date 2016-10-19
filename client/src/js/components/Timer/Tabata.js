import React, { Component } from 'react'

import tomatimer from './tomatimer'

export default class Tomato extends Component {
  render() {
    return (
      <div>
        <div>
          <span>00:00</span>
        </div>
        <div>
          <span>10 minutes</span>
        </div>
        <div>
          <button>start</button>
          <button>cancel</button>
          <button>reset</button>
        </div>
      </div>
    )
  }
}
