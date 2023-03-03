import React, { Component } from 'react'

class Counter extends Component {
  render() {
    return (
      <div>
        {/* (1) grid bootstrap + add button > go to App.js  */}
        <div className='row'>
          <div className='col-1'>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className='col'>
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className='btn btn-secondary btn-sm ml-2 pr-3 pl-3'
            >
              +
            </button>

            {/* (5a) */}
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className='btn btn-secondary btn-sm ml-2 pr-3 pl-3'
              disabled={this.props.counter.value === 0} // (5b)
            >
              -
            </button>

            <button
              className='btn btn-danger btn-sm m-2'
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              {' '}
              X
            </button>
          </div>
        </div>
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
