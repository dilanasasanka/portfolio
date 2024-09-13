import React from 'react'
import aws from '../images/aws.png'
import snowflake from '../images/snowflake.png'
import percipio from '../images/percipio.png'
import './certificationsection.css'

const CertificationSection = () => {
  return (
    <div className='certification-section-main-container'>
      <div className='section-two-container-2'>
        <h1>Achievements and Certifications</h1>
        <div className='section-two-container-2-card'>
          <div className='long-card-1'>
            <img src={aws} alt='aws'/>
            <div className='long-card-1-content'>
              <h1>AWS Certification</h1>
              <p>Cloud Fundamentals, AWS Services Overview, IAM, Compute Services, Storage Services, Networking & Content Delivery, Database Services, Security Best Practices</p>
            </div>
          </div>
          <div className='long-card-2'>
            <img src={snowflake} alt='snowflake'/>
            <div className='long-card-2-content'>
              <h1>Snowflake certification</h1>
              <p>SnowPro Core Certification: foundational expertise in Snowflake, including data warehousing, cloud architecture, and performance optimization</p>
            </div>
          </div>
          <div className='long-card-3'>
            <img src={percipio} alt='percipio'/>
            <div className='long-card-3-content'>
              <h1>Skillsoft percipio Ai & Gen AI Fundamentals</h1>
              <p>Introduction to Gen AI, Understanding LLMs, Fundamentals of AI & Machine Learning, Introduction to Deep Learning & NLP, Prompt Engineering with Generative AI Tools</p>
            </div>
          </div>
          <div className='long-card-4'>
            <img src={percipio} alt='percipio'/>
            <div className='long-card-4-content'>
              <h1>Skillsoft percipio Full Stack Java Developer</h1>
              <p>Core Java, JSP, Spring Framework, Spring Data JPA, REST API, MySQL, Unit Testing, Git & GitHub, Agile, DevOps</p>
            </div>
          </div>
          <div className='long-card-5'>
            <img src={percipio} alt='percipio'/>
            <div className='long-card-5-content'>
              <h1>Skillsoft percipio Angular Developer</h1>
              <p>HTML & CSS, JavaScript, Angular 11</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificationSection
