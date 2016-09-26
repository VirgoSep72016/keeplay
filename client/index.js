// document.write('ya')
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './js/components/Home'

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
  var navbar = document.getElementById("Navbar");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navbar.className = "w3-navbar" + " w3-card-2" + " w3-animate-top" + " w3-white";
  } else {
    navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
  }
}

ReactDOM.render((
    <Home />
  ),
  document.getElementById('app')
)
