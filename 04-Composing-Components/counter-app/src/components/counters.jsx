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

  // (2) this won't work since we don't have single source of truth > on file Counter, we use the props to initialize of the state, and that just run only once when the counter component is created > after initialize, the state in Counter becomes local state, so we cannot update it anymore > pic
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0
      return c
    })
    this.setState({ counters }) // overwrite
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId)

    this.setState({ counters })
  }

  render() {
    return (
      <div>
        {/* (1) */}
        <button
          onClick={this.handleReset}
          className='btn btn-primary btn-sm m-2'
        >
          Reset
        </button>
        <div>
          {this.state.counters.map((counter) => {
            return (
              <Counter
                key={counter.id}
                onDelete={this.handleDelete}
                counter={counter}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Counters
