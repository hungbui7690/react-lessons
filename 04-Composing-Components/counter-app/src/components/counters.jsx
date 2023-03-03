import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
  // (1)
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 3 },
      { id: 3, value: 1 },
      { id: 4, value: 0 },
    ],
  }

  render() {
    return (
      <div>
        {/* (2) though it is dynamic, but the values are still zero for all counters > next lecture */}
        <div>
          {this.state.counters.map((counter) => {
            return <Counter />
          })}
        </div>
      </div>
    )
  }
}

export default Counters
