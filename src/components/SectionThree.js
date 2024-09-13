import React, { useEffect, useState } from 'react';
import './sectionthree.css';

const SectionThree = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hoverClass = 'hover-effect';

  useEffect(() => {
    const items = document.querySelectorAll('.grid-item');

    const applyHoverEffect = (index) => {
      items.forEach(item => item.classList.remove(hoverClass));

      items[index].classList.add(hoverClass);
    };


    const switchContainer = () => {
      applyHoverEffect(currentIndex); 
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

   
    const interval = setInterval(switchContainer, 3000);


    return () => clearInterval(interval);
  }, [currentIndex]); 

  return (
    <div className='grid-main-container'>
      <h1 className="header">What I Bring to the Table 🎓</h1>
      <div className="grid-container">
        <div className="grid-item innoative-solutions">
          <h2><span className='yellow-1'>Innovative</span> Solutions</h2>
          {/* <p className='desktop-para'>Crafting unique, tailored solutions that address specific challenges.
          If you’re not satisfied, I’m committed to revising until it’s perfect.</p> */}
          <p className='mobile-para'>Providing tailored solutions to meet your unique challenges.</p>
        </div>
        <div className="grid-item personalized-attention">
          <h2>Personalized Attention</h2>
          <p>Dedicated focus on understanding and fulfilling project goals.</p>
        </div>
        <div className="grid-item resourceful-solutions">
          <h2>Resourceful Solutions</h2>
          <p>Delivering high-quality results while optimizing resources to maximize value.</p>
        </div>
        <div className="grid-item cutting-edge-expertise">
          <h2>Cutting-Edge Expertise</h2>
        </div>
        <div className="grid-item seamless-communication">
          <h2>Seamless Interaction</h2>
          <p>Always accessible and responsive interaction.</p>
        </div>
        <div className="grid-item punctual-project-completion">
          <h2>Commitment to Timely Execution</h2>
          {/* <p>Consistently meeting deadlines, ensuring that projects are completed on time with precision.</p> */}
        </div>
        <div className="grid-item team-work">
          <h2> <span className='yellow-1'>Team work</span></h2>
          <p>Collaborating effectively with a skilled team.</p>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
