import React, { Component } from 'react'
import D20 from './D20'
import D6 from './D6'

class Dice extends Component {

  selectDie = (props) => {
    switch(props.dice) {
      case 6: return <D6 size={props.size} />
      case 20: return <D20 size={props.size} />
    }
  }

  render() {
    return (
      <div className="noselect" onClick={this.props.onClick}>
        {this.selectDie(this.props)}
      </div>
    )
  }
}

export default Dice
