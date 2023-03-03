import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
  render() {
    // (3)
    const { onReset, onIncrement, onDelete, counters } = this.props

    return (
      <div>
        <button onClick={onReset} className='btn btn-primary btn-sm m-2'>
          Reset
        </button>
        <div>
          {counters.map((counter) => {
            return (
              <Counter
                key={counter.id}
                onDelete={onDelete} // (4)
                onIncrement={onIncrement}
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
