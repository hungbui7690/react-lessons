import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
  state = {}
  render() {
    // (1) each component is isolated from each other
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    )
  }
}

export default Counters
