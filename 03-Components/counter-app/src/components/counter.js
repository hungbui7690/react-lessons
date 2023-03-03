import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: 'http://picsum.photos/200',
  }

  render() {
    return (
      <React.Fragment>
        {/* (2) */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className='btn btn-secondary btn-sm'>Increment</button>
      </React.Fragment>
    )
  }

  // (1)
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
