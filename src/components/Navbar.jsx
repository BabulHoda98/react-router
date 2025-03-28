import React from 'react'
import{NavLink}from 'react-router'

const Navbar = () => {
  return (
    <header>
        <h3>Logo</h3>
        <ul>
            <li NavLink to="">Home</li>
        </ul>
        <ul>
            <li NavLink to="">About</li>
        </ul>
        <ul>
            <li NavLink to="">Contact</li>
        </ul>
    </header>
  )
}

export default Navbar