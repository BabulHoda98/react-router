import React from 'react'
import{NavLink}from 'react-router'

const Navbar = () => {
  return (
    <header className='header'>
        <h3>Logo</h3>
        <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
        </ul>
        <ul>
        <li>
              <NavLink to="/about">About</NavLink>
            </li>
        </ul>
        <ul>
        <li>
              <NavLink to="/contact">Contactus</NavLink>
            </li>
        </ul>
    </header>
  )
}

export default Navbar