import React, { useEffect, useRef } from 'react';
import './sectionfour.css';
import logo1 from '../images/tech-logos/logo-1.png';
import logo2 from '../images/tech-logos/logo-2.png';
import logo3 from '../images/tech-logos/logo-3.png';
import logo4 from '../images/tech-logos/logo-4.png';
import logo5 from '../images/tech-logos/logo-5.png';
import logo6 from '../images/tech-logos/logo-6.png';
import logo7 from '../images/tech-logos/logo-7.png';
import logo8 from '../images/tech-logos/logo-8.png';
import logo9 from '../images/tech-logos/logo-9.png';
import logo10 from '../images/tech-logos/logo-10.png';
import logo11 from '../images/tech-logos/logo-11.png';
import logo12 from '../images/tech-logos/logo-12.png';
import logo13 from '../images/tech-logos/logo-13.png';
import logo14 from '../images/tech-logos/logo-14.png';
import logo15 from '../images/tech-logos/logo-15.png';

const SectionFour = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const marqueeWidth = marquee.scrollWidth;
    let position = 0;
    const speed = 1.6; // Adjust speed as needed

    function animateMarquee() {
      position -= speed;
      if (Math.abs(position) >= marqueeWidth / 2) {
        position = 0; // Reset position for seamless loop
      }
      marquee.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animateMarquee);
    }

    animateMarquee();
  }, []);

  return (
    <div className="section-four">
      {/* <h2 className="section-four-title">Awesome Tech Companies I Have Worked With</h2> */}
      <div className="marquee-container">
        <div className="marquee" ref={marqueeRef}>
          <img src={logo1} alt="Tech Logo 1" className="brand-logo" />
          <img src={logo2} alt="Tech Logo 2" className="brand-logo" />
          <img src={logo3} alt="Tech Logo 3" className="brand-logo" />
          <img src={logo4} alt="Tech Logo 4" className="brand-logo" />
          <img src={logo5} alt="Tech Logo 5" className="brand-logo" />
          <img src={logo6} alt="Tech Logo 6" className="brand-logo" />
          <img src={logo7} alt="Tech Logo 7" className="brand-logo" />
          <img src={logo8} alt="Tech Logo 8" className="brand-logo" />
          <img src={logo9} alt="Tech Logo 9" className="brand-logo" />
          <img src={logo10} alt="Tech Logo 10" className="brand-logo" />
          <img src={logo11} alt="Tech Logo 11" className="brand-logo" />
          <img src={logo12} alt="Tech Logo 12" className="brand-logo" />
          <img src={logo13} alt="Tech Logo 13" className="brand-logo" />
          <img src={logo14} alt="Tech Logo 14" className="brand-logo" />
          <img src={logo15} alt="Tech Logo 15" className="brand-logo" />
          {/* Duplicate logos for seamless transition */}
          <img src={logo1} alt="Tech Logo 1" className="brand-logo" />
          <img src={logo2} alt="Tech Logo 2" className="brand-logo" />
          <img src={logo3} alt="Tech Logo 3" className="brand-logo" />
          <img src={logo4} alt="Tech Logo 4" className="brand-logo" />
          <img src={logo5} alt="Tech Logo 5" className="brand-logo" />
          <img src={logo6} alt="Tech Logo 6" className="brand-logo" />
          <img src={logo7} alt="Tech Logo 7" className="brand-logo" />
          <img src={logo8} alt="Tech Logo 8" className="brand-logo" />
          <img src={logo9} alt="Tech Logo 9" className="brand-logo" />
          <img src={logo10} alt="Tech Logo 10" className="brand-logo" />
          <img src={logo11} alt="Tech Logo 11" className="brand-logo" />
          <img src={logo12} alt="Tech Logo 12" className="brand-logo" />
          <img src={logo13} alt="Tech Logo 13" className="brand-logo" />
          <img src={logo14} alt="Tech Logo 14" className="brand-logo" />
          <img src={logo15} alt="Tech Logo 15" className="brand-logo" />
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
