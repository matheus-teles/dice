import React, { Component } from 'react'
import { connect } from 'react-redux'

import './ColorMenu.sass'

const COLORS = ["#F92672","#66D9EF","#A6E22E","#FD971F", '#FFFFFF'];

class ColorMenu extends Component {

  handleClick = (color) => {
    document.documentElement.style.setProperty('--color-dice', color);
  }

  render() {
    const colorList = COLORS.map((color) => {
      return (
      <li key={color}>
        <div onClick={(e) => this.handleClick(color, e)} className="block" style={{backgroundColor: color}}></div>
      </li>
      )
    })
    return (
      <div className="top-right-menu">
        {colorList}
      </div>
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
)(ColorMenu)
