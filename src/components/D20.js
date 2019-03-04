import React, { Component } from 'react'

import './D20.scss'

class D20 extends Component {

  generateRandomDice = () => {
    let faceUp = Math.floor(Math.random() * 20)
    const faces = [ { face: 'one',       value: 1 },
                    { face: 'two',       value: 2 },
                    { face: 'three',     value: 3 },
                    { face: 'four',      value: 4 },
                    { face: 'five',      value: 5 },
                    { face: 'six',       value: 6 },
                    { face: 'seven',     value: 7 },
                    { face: 'eight',     value: 8 },
                    { face: 'nine',      value: 9 },
                    { face: 'ten',       value: 10 },
                    { face: 'eleven',    value: 11 },
                    { face: 'twelve',    value: 12 },
                    { face: 'thirteen',  value: 13 },
                    { face: 'fourteen',  value: 14 },
                    { face: 'fithteen',  value: 15 },
                    { face: 'sixteen',   value: 16 },
                    { face: 'seventeen', value: 17 },
                    { face: 'eighteen',  value: 18 },
                    { face: 'nineteen',  value: 19 },
                    { face: 'twenty',    value: 20 }]
    return faces.map((face, index) => {
      let currentFace = (faceUp + index) % faces.length
      return  <div className={`face ${faces[currentFace].face}`} key={faces[currentFace].value} >
                <span>{faces[currentFace].value}</span>
              </div>
    })
  }

  render() {
    return (
      <div className={`D20 ${this.props.size}-dice`} style={this.props.style}>
        {this.generateRandomDice()}
      </div>
    )
  }
}

export default D20