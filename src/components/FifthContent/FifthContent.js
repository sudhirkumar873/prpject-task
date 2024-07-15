import React from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import './FifthContent.css'; // Assuming you are using a separate CSS file
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import { GoArrowRight } from 'react-icons/go';

const FifthContent = () => {
  return (
    <ScrollAnimation animateIn="slideInUp">
      <div className='second-content'>
        <div className='content-overlay'>
          <img src='https://miro.medium.com/v2/resize:fit:720/format:webp/1*w1L0hZkVS9GiVdH0WFe60w.gif' className='full-width height-fixed' alt='Cover'/>
          <div className='centered-content'>
            <h6>Careers</h6>
            <h2>Join the Creators of Bold Change.</h2>
            <span>Submit    <FaRegArrowAltCircleRight className="mask-icon" size={24} /></span>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default FifthContent;
