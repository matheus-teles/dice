import React, { Component } from 'react'
import Button from './Button'
import { connect } from 'react-redux'
import { rollDice } from '../redux/actions'
import './StartScreen.sass'

class StartScreen extends Component {

  handleClick = () => {
    this.props.rollDice()
  } 

  render() {
    return (
      <div className="StartScreen">
        {this.props.children}
        <Button clickAction={this.handleClick} text="Roll the dice" />
      </div>
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
  { rollDice }
)(StartScreen)