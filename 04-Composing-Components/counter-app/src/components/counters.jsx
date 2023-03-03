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
            return (
              <Counter key={counter.id} value={counter.value}>
                {/* (1) h4 is in between Counter opening and closing tags  */}
                <h4>Counter #${counter.id}</h4>
              </Counter>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Counters
