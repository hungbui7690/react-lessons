import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
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
        <div>
          {this.state.counters.map((counter) => {
            // (1) pass data > go to counter.jsx
            return (
              <Counter key={counter.id} value={counter.value} selected={true} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Counters
