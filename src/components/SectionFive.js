import React from 'react'
import './sectionfive.css'
import phone from '../images/phone.png'

const SectionFive = () => {
  return (
    <div id="contact-section" className='section-five-container'>
      <div className='section-five-container-1'>
        <h1>Want to know more?</h1>
        <p>Looking for more details? Let’s connect via email to discuss your specific needs and answer any questions you have.</p>
        <button
            className='contact-me-btn btn btn-white'
            onClick={() => window.location.href = 'mailto:dilanamathugama@gmail.com'}
          >
            Contact Now
          </button>
      </div>
      <div className='section-five-container-2'>
        <img src={phone} alt='phone'/>
      </div>
    </div>
  )
}

export default SectionFive
