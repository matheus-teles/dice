import React, { Component } from 'react'

import './InfiniteRollAnimation.sass'

class InfiniteRollAnimation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 1,
      y: 1,
      directionX: -1,
      directionY: 0
    }
  }
  componentDidMount() {
    setInterval(this.increaseAngle, 100)
  }

  increaseAngle = () => {
    if(this.state.directionX === -1){
      if(this.state.x === -1) {
        this.setState((state) => ({
          directionX: 0,
          directionY: -1
        }))
        return
      }
      this.setState((state) => ({
        x: ((state.x * 10) - 1) / 10
      }))
      return
    }
    if(this.state.directionY === -1){
      if(this.state.y === -1) {
        this.setState((state) => ({
          directionX: 1,
          directionY: 0
        }))
        return
      }
      this.setState((state) => ({
        y: ((state.y * 10) - 1) / 10
      }))
      return
    }
    if(this.state.directionX === 1){
      if(this.state.x === 1) {
        this.setState((state) => ({
          directionX: 0,
          directionY: 1
        }))
        return
      }
      this.setState((state) => ({
        x: ((state.x * 10) + 1) / 10
      }))
      return
    }
    if(this.state.directionY === 1){
      if(this.state.y === 1) {
        this.setState((state) => ({
          directionX: -1,
          directionY: 0
        }))
        return
      }
      this.setState((state) => ({
        y: ((state.y * 10) + 1) / 10
      }))
      return
    }
  }

  render() {
    return (
      <div className="InfiniteRollAnimation">
        <div className="animation-helper">
          {this.props.children}
        </div>  
      </div>
    )
  }
}

export default InfiniteRollAnimation