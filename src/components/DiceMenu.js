import React, { Component } from 'react'
import { connect } from 'react-redux'
import { chooseDice } from '../redux/actions'
import InfiniteRollAnimation from './InfiniteRollAnimation'
import Dice from './Dice'

import './DiceMenu.sass'


class DiceMenu extends Component {
  
  handleClick = (dice) => {
    this.props.chooseDice(dice)
  }
  
  render() {
  const DICES = [4, 6, 20];
    const diceList = DICES.map((dice) => {
      return (
      <li key={dice} className={this.props.currentDice == dice ? 'active' : ''}>
        <div onClick={(e) => this.handleClick(dice, e)} className="dice">
          <InfiniteRollAnimation>
            <Dice dice={dice} size="small" />
          </InfiniteRollAnimation>
        </div>
      </li>
      )
    })
    return (
      <ul className="left-top-menu">
        {diceList}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(
  mapStateToProps,
  { chooseDice }
)(DiceMenu)
