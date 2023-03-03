import React, { Component } from 'react'

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
      console.log('> Making AJAX call')
    }
  }

  // (***) we can see that app will re-render first, then this method will be called > with this methods, we can use to cleanup "listener", "setTimeout"...to prevent memory leaks
  componentWillUnmount() {
    console.log('> Unmount - Counter')
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
