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

  // (1) we don't update directly, but create a new array without the deleted element > then let react update for us
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId)

    this.setState({ counters })
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
                counter={counter} // (2) instead passing value and id separately, we pass the whole counter
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Counters
