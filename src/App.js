import React, { Component }  from 'react';
import Counter from './components/Counter';

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { counterValue: 0 }
  //   this.inc = this.inc.bind(this)
  //   this.dec = this.dec.bind(this)
  // }

  // state = { counterValue: 0 }

  // // inc() {
    
  // // }

  // // dec() {

  // // }

  // inc = () => {
  //   this.setState({ counterValue: this.state.counterValue + 1 })
  // }

  // dec = () => {
  //   this.setState({ counterValue: this.state.counterValue - 1 })
  // }

  render() {
    return (
      // <div>
      //   <h1>This is our counter</h1>
      //   <p>{this.state.counterValue}</p>
      //   <button onClick={this.inc}>+</button>
      //   <button onClick={this.dec}>-</button>
      // </div>
      <div>
        <Counter colorName='red' />
        <Counter colorName='pink' />
        <Counter colorName='blue' />
        <Counter colorName='yellow' />
        <Counter colorName='green' />
      </div>
    )
  }
}

export default App;
