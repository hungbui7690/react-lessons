import React, { Component } from 'react'

class Counter extends Component {
  // (1)
  state = {
    count: 0,
  }

  // (3)
  render() {
    return (
      <React.Fragment>
        <h1>{this.formatCount()}</h1>
        <button>Increment</button>
      </React.Fragment>
    )
  }

  // (2)
  formatCount() {
    const { count } = this.state
    return count === 0 ? 'Zero' : count
  }
}

export default Counter
