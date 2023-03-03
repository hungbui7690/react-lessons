import React, { Component } from 'react'

// (***) shot-cut=sfc > use props in param + remove "this" in sfc
const Navbar = (props) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container-fluid'>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href='#' className='navbar-brand'>
          Navbar
          <span className='badge badge-pill badge-secondary'>
            {props.totalCounters}
          </span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
