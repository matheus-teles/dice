import React, { Component } from 'react'

import './ColorMenu.sass'

const COLORS = ["#272822","#F92672","#66D9EF","#A6E22E","#FD971F", '#FFFFFF'];

class ColorMenu extends Component {

  handleClick = (color) => {
    document.documentElement.style.setProperty('--color-dice', color);
  }

  render() {
    const colorList = COLORS.map((color) => {
      return <div key={color} onClick={(e) => this.handleClick(color, e)} className="block" style={{backgroundColor: color}}></div>
    })
    return (
      <div className="top-right-menu">
        {colorList}
      </div>
    )
  }
}

export default ColorMenu
