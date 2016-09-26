import React, { Component } from 'react'
import FaSearch from 'react-icons/lib/fa/search'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="w3-top">
        <ul className="w3-navbar">
          <li><a href="#" className="w3-padding-large">HOME</a></li>
          <li className="w3-hide-small w3-right">
            <a href="#" className="w3-padding-large"><FaSearch /></a>
          </li>
        </ul>
      </div>
    )
  }
}
