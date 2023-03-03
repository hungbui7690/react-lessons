import React, { Component } from 'react'

class Counter extends Component {
  // (***) this function is called after the component is updated > we will have new states & new props > based on this, we can decide we should make an AJAX call or not > this is an optimization technique
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps.counter)
    console.log('prevState', prevState)
    console.log('***************')
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>

        <button
          className='btn btn-danger btn-sm m-2'
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          {' '}
          Delete
        </button>
      </div>
    )
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-'
    classes += this.props.counter.value === 0 ? 'warning' : 'primary'
    return classes
  }

  formatCount() {
    const { value: count } = this.props.counter
    return count === 0 ? 'Zero' : count
  }
}

export default Counter
