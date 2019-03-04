import React, { Component } from 'react'
import { connect } from 'react-redux'
import ThrowAnimation from './ThrowAnimation'
import Button from './Button'
import Dice from './Dice'

import './RollScreen.sass'

class RollScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dices: 0
    }
  }
  
  rerollDice = () => {
    this.setState((state,props) => ({
      dices: state.dices + 1
    }))
  }
  
  render() {
    return (
      <div className="RollScreen">
        <ThrowAnimation key={this.state.dices}>
          <Dice dice={this.props.currentDice} size="big"/>
        </ThrowAnimation>
        <div className="bottom-right-menu">
          <Button clickAction={this.rerollDice} text="Throw dice"/>
        </div>
      </div>
    ) 
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    ...state
  }
}

export default connect(
  mapStateToProps
)(RollScreen)