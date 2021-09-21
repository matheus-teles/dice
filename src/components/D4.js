import React, { Component } from 'react'
import _ from 'lodash'

import './D4.sass'

class D4 extends Component {

  generateRandomDice = () => {
    let faceUp = Math.floor(Math.random() * 4)
    const faces = [ { face: 'one',    value: 1, labels: [[4, 2, 3], [1, 4, 3], [1, 2, 4], [1, 3, 2]]},
                    { face: 'two',    value: 2, labels: [[4, 1, 3], [2, 4, 3], [2, 1, 4], [2, 3, 1]]},
                    { face: 'three',  value: 3, labels: [[4, 2, 1], [3, 4, 1], [3, 2, 4], [3, 1, 2]]},
                    { face: 'four',   value: 4, labels: [[1, 2, 3], [4, 1, 3], [4, 2, 1], [4, 3, 2]]}]
    return faces.map((face, index) => {
      let currentFace = (faceUp + index) % faces.length
      return  <div className={`face ${faces[currentFace].face}`} key={faces[currentFace].value}>
                {faces[faceUp].labels[index].map(label => {
                  return <span>{label}</span> 
                })}
              </div>
    })
  }

  render() {
    return (
      <div className={`D4 ${this.props.size}-dice`} style={this.props.style}>
        {this.generateRandomDice()}
      </div>
    )
  }
}

export default D4
