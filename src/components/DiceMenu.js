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
      <li key={dice.id} className={this.props.currentDice == dice.id ? 'active' : ''}>
        <div onClick={(e) => this.handleClick(dice.id, e)} className="dice">
          <InfiniteRollAnimation>
            {dice.value}
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
