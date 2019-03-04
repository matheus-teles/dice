import React from 'react'
import D20 from './D20'
import D6 from './D6'

function Dice(props) {
  switch(props.dice) {
    case 6: return <D6 size={props.size} />
    case 20: return <D20 size={props.size} />
  }
}

export default Dice