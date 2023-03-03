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
    // (2)
    console.log(this.props)

    return (
      <div>
        {/* (3) in this case, we can pass the id to props from parent, and here we can render > but there are times that the child component is complex (dialog for ex) > for those situations, we need to pass children */}
        {this.props.children}

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className='btn btn-secondary btn-sm'
        >
          Increment
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
