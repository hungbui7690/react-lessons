import React, { Component } from 'react'

// (2) get from bootstrap
class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-light bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            Navbar
          </a>
        </div>
      </nav>
    )
  }
}

export default Navbar
