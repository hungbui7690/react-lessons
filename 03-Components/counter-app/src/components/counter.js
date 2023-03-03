import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0,
  }

  // (1)
  handleIncrement = (product) => {
    console.log(product)
    this.setState({ count: this.state.count + 1 }) // we cannot use ++ here
  }

  // (2) this is solution 1
  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 })
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        {/* (3) For example, we need to pass arg here > we need to pass a function ref  */}
        <button
          onClick={this.doHandleIncrement}
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
