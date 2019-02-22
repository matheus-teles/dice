import React, { Component } from 'react'
import _ from 'lodash'

import './DiceSolid.sass'

class DiceSolid extends Component {

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
      <div className="DiceSolid" style={this.props.style}>
        {this.generateRandomDice()}
      </div>
    )
  }
}

export default DiceSolid