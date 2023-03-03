import React, { Component } from 'react'

const Navbar = ({ totalCounters }) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container-fluid'>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href='#' className='navbar-brand'>
          Navbar
          <span className='badge badge-pill badge-secondary'>
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
