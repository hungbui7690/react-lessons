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

  // (1) add id
  handleDelete = (counterId) => {
    console.log('Event Handler Called', counterId)
  }

  render() {
    return (
      <div>
        <div>
          {this.state.counters.map((counter) => {
            return (
              <Counter
                key={counter.id}
                onDelete={this.handleDelete}
                value={counter.value}
                id={counter.id} // (2) go to Counter.jsx
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Counters
