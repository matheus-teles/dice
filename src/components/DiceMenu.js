import React, { Component } from 'react'
import { connect } from 'react-redux'
import { chooseDice } from '../redux/actions'
import InfiniteRollAnimation from './InfiniteRollAnimation'
import D6 from './D6'
import D20 from './D20'

import './DiceMenu.sass'


class DiceMenu extends Component {
  
  handleClick = (dice) => {
    this.props.chooseDice(dice)
  }
  
  render() {
  const DICES = [{id: 6, value: <D6 size="small" />}, {id: 20, value: <D20 size="small" />}];
    const diceList = DICES.map((dice) => {
      return (
      <div key={dice.id} onClick={(e) => this.handleClick(dice.id, e)} className="dice">
        <InfiniteRollAnimation>
          {dice.value}
        </InfiniteRollAnimation>
      </div>
      )
    })
    return (
      <div className="left-top-menu">
        {diceList}
      </div>
    )
  }
}

export default connect(
  null,
  { chooseDice }
)(DiceMenu)
