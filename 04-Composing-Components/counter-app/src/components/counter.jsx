import React, { Component } from 'react'

class Counter extends Component {
  state = {
    value: this.props.value,
  }

  handleIncrement = (product) => {
    console.log(product)
    this.setState({ value: this.state.value + 1 })
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>

        {/* (1) the problem appears: check the state of this component > it just has value only > but if we want to delete, we need to go to counter[s] and remove from the array of counters in the state > "The component that [owns] a piece of the state, should be the one who [modifying] it " > pic > go to counter[s] to handle event */}
        <button
          className='btn btn-danger btn-sm m-2'
          onClick={this.props.onDelete} // (4)
        >
          {' '}
          Delete
        </button>
      </div>
    )
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-'
    classes += this.state.value === 0 ? 'warning' : 'primary'
    return classes
  }

  formatCount() {
    const { value: count } = this.state
    return count === 0 ? 'Zero' : count
  }
}

export default Counter
