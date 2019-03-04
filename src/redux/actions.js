import { START_SCREEN, ROLL_SCREEN, ROLL_DICE, CHOOSE_DICE } from './actionTypes'

export function rollDice() {
  return {
    type: ROLL_DICE,
    payload: {
      currentScreen: 1
    }
  }
}

export function chooseDice(dice) {
  return {
    type: CHOOSE_DICE,
    payload: {
      currentDice: dice
    }
  }
}
