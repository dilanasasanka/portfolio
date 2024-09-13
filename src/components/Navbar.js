import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link smooth to="/#contact-section">Contact</Link> {/* Smooth scrolling */}
    </div>
  )
}

export default Navbar
