import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0,
  }

  // (***)
  constructor() {
    super()
    console.log('Constructor :>> ', this) // point to Counter {} > not undefined at this point
    this.handleIncrement = this.handleIncrement.bind(this) // because not undefined at this point > it's a good change to reset this keyword
  }

  // (***)
  // obj.method > obj
  // function() > window > undefined in strict mode
  handleIncrement() {
    console.log('Increment Clicked', this) // Counter {}, since we reset this keyword in constructor function
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
      </React.Fragment>
    )
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-'
    classes += this.state.count === 0 ? 'warning' : 'primary'
    return classes
  }

  formatCount() {
    const { count } = this.state
    return count === 0 ? 'Zero' : count
  }
}

export default Counter
