import React, { Component } from 'react'
import _ from 'lodash'

import './D6.sass'

class D6 extends Component {

  generateRandomDice = () => {
    let faceUp = Math.floor(Math.random() * 6)
    const faces = [ { face: 'one',    value: 1 },
                    { face: 'two',    value: 2 },
                    { face: 'three',  value: 3 },
                    { face: 'four',   value: 4 },
                    { face: 'five',   value: 5 },
                    { face: 'six',    value: 6 }]
    return faces.map((face, index) => {
      let currentFace = (faceUp + index) % faces.length
      return  <div className={`face ${faces[currentFace].face}`} key={faces[currentFace].value} >
                {_.times(faces[currentFace].value, (i) => {
                  return <div className="dot" key={i}></div>
                })}
              </div>
    })
  }

  render() {
    return (
      <div className={`D6 ${this.props.size}-dice`} style={this.props.style}>
        {this.generateRandomDice()}
      </div>
    )
  }
}

export default D6