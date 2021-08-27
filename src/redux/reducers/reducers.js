import { combineReducers } from 'redux'

import { ROLL_DICE, ROLL_SCREEN, START_SCREEN, CHOOSE_DICE } from '../actionTypes'

function currentScreen(state = 0, action) {
  switch(action.type) {
    case ROLL_DICE:
      const { currentScreen } = action.payload
      return {
        ...state,
        currentScreen
      }
    default:
      return state
  }
}

function currentDice(state = 20, action) {
  switch(action.type) {
    case CHOOSE_DICE:
      return action.payload.currentDice
    default:
      return state
  }
}

const rootReducer = combineReducers({
  currentScreen,
  currentDice
})

export default rootReducer