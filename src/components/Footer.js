import React from 'react'
import './footer.css'
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <div className='footer-links'>
          <a href="https://www.linkedin.com/in/dilana-sasanka-ba79a723a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="mailto:dilanamathugama@gmail.com">
            <FaEnvelope /> dilanamathugama@gmail.com
          </a>
          <a href="tel:+94716554822">
            <FaPhone /> +94 71 655 4822
          </a>
        </div>
        <div className='footer-rights'>
          <p>© 2024 dilanasasanka. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
