import React from 'react'
import profile from '../images/profile-pic.png'
import IITLogo from '../images/IIT-logo.png'
import UOWLogo from '../images/UOW-logo.png'
import HCLLogo from '../images/HCL-Logo.png'
import './sectionone.css'

const SectionOne = () => {
  return (
    <div className='section-one-main-container'>
      <div className='section-one-container-1'>
        <div className='section-one-container-1-image'>
          <img src={profile} alt='profile-pic' />
        </div>
        <div className='section-one-container-1-content'>
          <h2>Hi, I'm</h2>
          <h1>Dilana Sasanka</h1>
          <p>A <span className='color-orange'>full-stack developer</span> with 3 years commercial experience
            creating successful websites</p>
          <button
            className='btn btn-white btn-animate'
            id='section-1-btn-1'
            onClick={() => window.location.href = 'mailto:dilanamathugama@gmail.com'}
          >
            Let's Talk!
          </button>
        </div>
      </div>
      <div className='section-one-container-2'>
        <div className='section-one-container-2-1'>
          <div className='section-one-container-2-1-content'>
            <p>
              Pursuing a <span className='color-blue'>Bachelor of Computer Science</span> degree from the University of Westminster,
              in collaboration with the Informatics Institute of Sri Lanka.
            </p>
          </div>
          <div className='section-one-container-2-1-images'>
            <img src={IITLogo} id='iit' alt='iit-logo' />
            <img src={UOWLogo} id='uow' alt='uow-logo' />
          </div>
        </div>
        <div className='section-one-container-2-2'>
          <p>Over three years at HCLTech Sri Lanka, developed robust skills in full-stack development, database management, and team collaboration.
          </p>
          <div className='section-one-container-2-2-image'>
            <img src={HCLLogo} alt='HCL-logo' />
          </div>
          
          <p>
            Successfully completed a range of personal and collaborative projects, crafting customized solutions to meet diverse needs.
          </p>
        </div>
      </div>
      <div className='section-one-container-3'>
        <div className='section-one-container-3-1'>
          <p className='title'>Programming Languages</p>
          <p className='language-text'>Java</p>
          <p className='language-text'>Javascript</p>
          <p className='language-text'>Python</p>
          <p className='language-text'>R</p>

          <p className='title specialization'>Specialization</p>
          <p className='language-text'>Fullstack Development</p>
          <p className='language-text'>Machine Learning</p>

        </div>
        <div className='section-one-container-3-2'>
          <p className='title'>Framework and Libraries</p>
          <p className='language-text'>Spring Boot</p>
          <p className='language-text'>React</p>
          <p className='language-text'>Angular</p>
          <p className='language-text'>Express</p>
          <p className='language-text'>Node.js</p>
          <p className='language-text'>Flask</p>
          <p className='language-text'>Langchain</p>
        </div>
        <div className='section-one-container-3-3'>
          <p className='title'>Databases</p>
          <p className='language-text'>MongoDB</p>
          <p className='language-text'>MySQL</p>

          <p className='title tools'>Tools & Platforms</p>
          <p className='language-text'>Git</p>
          <p className='language-text'>AWS</p>

          <p className='title design'>Design</p>
          <p className='language-text'>Figma</p>
          <p className='language-text'>UI/UX</p>
        </div>
      </div>

    </div>
  )
}

export default SectionOne

