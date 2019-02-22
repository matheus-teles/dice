import { START_SCREEN, ROLL_SCREEN, ROLL_DICE } from './actionTypes'

export function rollDice() {
  return {
    type: ROLL_DICE,
    payload: {
      currentScreen: 1
    }
  }
}
