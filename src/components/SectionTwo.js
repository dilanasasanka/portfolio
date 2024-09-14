import React from 'react'
import artCult from '../images/artcult-thumbnail.png'
import genify from '../images/genify-thumbnail.png'
import metrics from '../images/metrics-thumbnail.png'
import artCult2 from '../images/artcult-1.png'
import artCult34 from '../images/artcult-34.png'
import genifyResponsive from '../images/genify-responsive.png'
import metricsResponsive from '../images/eco-metrics-responsive.png'
import aws from '../images/aws.png'
import snowflake from '../images/snowflake.png'
import percipio from '../images/percipio.png'
import './sectiontwo.css'
import { useNavigate } from 'react-router-dom';

const SectionTwo = () => {
  const navigate = useNavigate();

  const handleProjectClick = (id) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    navigate(`/projects/${id}`);
  };

  return (
    <div className='section-two-main-container'>
      <div className='section-two-container-1'>
        <h1>A Glimpse into my portfolio</h1>
        <div className='section-two-container-1-card'>
          <div 
            className='card-1'
            key={'1'}
            onClick={() => handleProjectClick('3')}
          >
            <img src={genifyResponsive} id='arcult-1' className='artcult' alt='art-cult1'/>
            <img src={genify} id='arcult-2' alt='art-cult2' />
            <h1>Genify</h1>
          </div>
          <div 
            className='card-2'
            key={'2'}
            onClick={() => handleProjectClick('1')}
          >
            {/* <img src={artCult2} id='arcult-1' alt='art-cult1' /> */}
            <img src={artCult34} id='arcult-1' className='artcult' alt='art-cult1'/>
            <img src={artCult} id='arcult-2' alt='art-cult2' />
            <h1>ArtCult</h1>
          </div>
          <div 
            className='card-3'
            key={'3'}
            onClick={() => handleProjectClick('2')}
          >
            <img src={metricsResponsive} className='metrcis' id='arcult-1' alt='art-cult1'/>
            <img src={metrics} id='arcult-2' alt='art-cult2' />
            <h1>Metrics</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo
