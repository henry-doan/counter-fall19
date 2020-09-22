import React, { Component } from 'react';

class Counter extends Component { 
  state = { counterValue: 0 }

  inc = () => {
    this.setState({ counterValue: this.state.counterValue + 1 })
  }

  dec = () => {
    this.setState({ counterValue: this.state.counterValue - 1 })
  }

  render() {
    const { colorName } = this.props 
    // const colorName = this.props.colorName
    const { counterValue } = this.state
    return (
      <div style={{ backgroundColor: colorName }}>
        <h1>{ colorName } counter</h1>
        <p>{ counterValue }</p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  } 
}

export default Counter;