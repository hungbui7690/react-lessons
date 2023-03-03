import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-light bg-light'>
        <div className='container-fluid'>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href='#' className='navbar-brand'>
            Navbar
          </a>
        </div>
      </nav>
    )
  }
}

export default Navbar
