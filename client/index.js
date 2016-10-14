import React from 'react'
import ReactDOM from 'react-dom'
import Home from './src/js/components/Home'
import { throttle } from 'lodash'

// Change style of navbar on scroll
const showNavbar = "w3-card-2 w3-animate-top w3-white w3-navbar"
const hideNavbar = "w3-navbar"

function myFunction() {
  const navbar = document.getElementById("Navbar");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navbar.className = showNavbar
  } else {
    navbar.className = hideNavbar
  }
}

window.onscroll = throttle(myFunction, 426);

ReactDOM.render((
    <Home />
  ),
  document.getElementById('app')
)
