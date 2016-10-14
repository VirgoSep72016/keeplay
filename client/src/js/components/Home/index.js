import React, { Component } from 'react'
import Navbar from './Navbar'
import About from './About'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="root">
        <Navbar />
        <div className="bgimg-1">
          <div className="w3-display-middle homeTitle">
            <span className="w3-center w3-padding-xlarge w3-black w3-xlarge w3-wide w3-animate-opacity">
              PUG
              <span className="w3-hide-small"> IS SO </span>
               CUTE
            </span>
          </div>
        </div>
        <About />
        <footer className="w3-center w3-dark-grey w3-padding-48 w3-hover-black">
          <p>by us</p>
        </footer>
      </div>
    )
  }
}
