import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: 'http://picsum.photos/200',
  }

  // (4)
  styles = {
    fontSize: 15,
    fontWeight: 'bold',
  }

  render() {
    return (
      <React.Fragment>
        {/* (2) */}
        <img
          style={{ width: '100px', height: '100px' }}
          src={this.state.imageUrl}
          alt=''
        />

        {/* (3) */}
        <span style={this.styles} className='badge badge-primary m-2'>
          {this.formatCount()}
        </span>
        <button className='btn btn-secondary btn-sm'>Increment</button>
      </React.Fragment>
    )
  }

  formatCount() {
    const { count } = this.state
    return count === 0 ? 'Zero' : count
  }
}

export default Counter
