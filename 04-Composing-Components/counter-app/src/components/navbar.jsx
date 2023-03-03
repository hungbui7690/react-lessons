import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-light bg-light'>
        <div className='container-fluid'>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href='#' className='navbar-brand'>
            Navbar {/* (3) */}
            <span className='badge badge-pill badge-secondary'>
              {this.props.totalCounters}
            </span>
          </a>
        </div>
      </nav>
    )
  }
}

export default Navbar
