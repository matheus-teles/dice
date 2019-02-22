import React from 'react'

import './Button.sass'

function Button(props) {
  return <button onClick={() => props.clickAction()}>{props.text}</button>
}

export default Button