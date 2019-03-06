import React, { Component } from 'react';
import Screen from './components/Screen'
import './App.sass';
import './colors.css'
import ColorMenu from './components/ColorMenu'
import DiceMenu from './components/DiceMenu'

const START_STATE = 0
const ROLL_STATE = 1

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorMenu />
        <DiceMenu />
        <Screen />
      </div>
    );
  }
}

export default App;
