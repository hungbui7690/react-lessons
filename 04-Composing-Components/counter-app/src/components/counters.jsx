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

  // (1) we don't use id in parameter, but use counter > so that we use indexOf() to find ID
  handleIncrement = (counter) => {
    const counters = [...this.state.counters] // copy the whole array
    const index = counters.indexOf(counter) // find the counter we want to update
    counters[index].value++ // update

    this.setState({ counters }) // let react update for us
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0
      return c
    })
    this.setState({ counters })
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId)

    this.setState({ counters })
  }

  render() {
    return (
      <div>
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
                onIncrement={this.handleIncrement} // (2)
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
