import { combineReducers } from 'redux'

import { ROLL_DICE, ROLL_SCREEN, START_SCREEN } from '../actionTypes'

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

const rootReducer = combineReducers({
  currentScreen
})

export default rootReducer