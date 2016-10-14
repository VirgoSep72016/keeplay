import React, { Component } from 'react'

const info = {
  'lin-yen': {
    photo: 'https://goo.gl/KpjN9i',
    alt: 'Photo of lin-yen',
    text: 'lin-yen is so smart'
  },
  'ger': {
    photo: 'http://24.media.tumblr.com/tumblr_m41h7v76lK1qkpxt0o1_250.jpg',
    alt: 'Photo of ger',
    text: 'ger is so hungry'
  }
}

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      member: [ 'lin-yen', 'ger' ]
    }
  }

  render() {
    return (
      <div className="w3-content w3-container w3-padding-64" id="about">
        <h3 className="w3-center">ABOUT US</h3>
        <p className="w3-center"><em>keep the dream</em></p>
        <p><b>keeplay</b> is a magic repository which makes your dream come true! Well begun is half done. Constant dripping wears away the stone. If you wish to be the best man, you must suffer the bitterest of the bitter.</p>
        { this.state.member.map((member)=>{
          return (
            <div className="w3-row" key={member}>
              <div className="w3-col m6 w3-center w3-section">
                <p><b>{member}</b></p>
                <img className="w3-circle" src={info[member].photo} alt={info[member].alt} />
              </div>
              <div className="w3-col m6 w3-hide-small w3-section">
                <p>{info[member].text}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
