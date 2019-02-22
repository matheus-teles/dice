import React, { Component } from 'react'
import Dice from './Dice'
import Button from './Button'

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
        {this.props.children}
        <Dice key={this.state.dices}/>
        <div className="bottom-right-menu">
          <Button clickAction={this.rerollDice} text="Throw dice"/>
        </div>
      </div>
    ) 
  }
}

export default RollScreen