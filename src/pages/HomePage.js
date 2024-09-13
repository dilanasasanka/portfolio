import React from 'react'
import './homepage.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'
import SectionFive from '../components/SectionFive'
import ReviewsSection from '../components/ReviewsSection';
import CertificationSection from '../components/CertificationSection'

const HomePage = () => {
  return (
    <div className='main-container'>
      <Navbar />
      <SectionOne />
      <SectionFour />
      <SectionTwo />
      <CertificationSection />
      <SectionThree />
      <ReviewsSection />
      <SectionFive />
      <Footer />
    </div>
  )
}

export default HomePage
