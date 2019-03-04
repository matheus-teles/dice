import React, { Component } from 'react'

import './ThrowAnimation.sass'

class ThrowAnimation extends Component {

  constructor(props){
    super(props)
    this.state = {
      randomSide: Math.floor(Math.random() * 4),
      randomDepth: Math.floor(Math.random() * 101) - 50
    }
  }

  generateProperRotation = () => {
    let styleSheet = document.styleSheets[0]
    let style = ""
    let style2 = ""
    switch(this.state.randomSide){
      case 0:
        style = `rotate3d(${this.state.randomDepth / 50}, 1, 0, 0deg)`
        style2 = `rotate3d(${this.state.randomDepth / 50}, 1, 0, 1070deg)`
        break;
      case 1:
        style = `rotate3d(${this.state.randomDepth / 50}, -1, 0, 0deg)`
        style2 = `rotate3d(${this.state.randomDepth / 50}, -1, 0, 1070deg)`
        break;
      case 2:
        style = `rotate3d(-1, ${this.state.randomDepth / 50 * -1}, 0, 0deg)`
        style2 = `rotate3d(-1, ${this.state.randomDepth / 50 * -1}, 0, 1070deg)`
        break;
      case 3:
        style = `rotate3d(1, ${this.state.randomDepth / 50 * -1}, 0, 0deg)`
        style2 = `rotate3d(1, ${this.state.randomDepth / 50 * -1}, 0, 1070deg)`
        break;
    }
    const keyframes = `@keyframes rot {
      from {
        transform: ${style}
      }
      to {
        transform: ${style2}
      }
    }`

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length)

    return {
      transform: style
    }
  }

  randomPosition = () => {
    let cssTransformation = ""
    switch(this.state.randomSide){
      case 0:
        cssTransformation = `translate3D(calc(-50% - 100px), ${this.state.randomDepth}%, 0)`
        break;
      case 1:
        cssTransformation = `translate3D(calc(50% + 100px), ${this.state.randomDepth}%, 0)`
        break;
      case 2:
        cssTransformation = `translate3D(${this.state.randomDepth}%, calc(-50% - 100px), 0)`
        break;
      case 3:
        cssTransformation = `translate3D(${this.state.randomDepth}%, calc(50% + 100px), 0)`
        break;
    }
    return {
      transform: cssTransformation
    }
  }

  render() {
    return (
      <div className="ThrowAnimation" style={this.randomPosition()}>
        <div className="animation-helper" style={this.generateProperRotation()}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default ThrowAnimation