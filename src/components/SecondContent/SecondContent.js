import React from 'react';
import './SecondContent.css'; // Assuming you are using a separate CSS file
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';


const SecondContent = () => {
  return (
    <ScrollAnimation animateIn="slideInUp">
    <div className='second-content'>
      <div className='content-overlay'>
        <img src='https://i.gifer.com/BXNA.gif' className='full-width height-half' alt='Cover'/>
        <div className='centered-content'>
          <h2>Leading the Way<br/>with Innovative Digital<br/> Transformation Solutions</h2>
          <span>Explore    <FaRegArrowAltCircleRight className="mask-icon" size={24} /></span>
        </div>
      </div>
    </div>
    </ScrollAnimation>
  );
}

export default SecondContent;
