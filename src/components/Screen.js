import React, { Component } from 'react';
import StartScreen from './StartScreen'
import RollScreen from './RollScreen'
import { connect } from 'react-redux'

const START_STATE = 0
const ROLL_STATE = 1

class Screen extends Component {
  selectScreen = () => {
    if (this.props.currentScreen === START_STATE) return <StartScreen /> 
    return <RollScreen />
  }

  render() {
    return (
      <>
      {this.selectScreen()}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(
  mapStateToProps
)(Screen)