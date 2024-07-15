import React from 'react';
import './FourthContent.css'; // Assuming you are using a separate CSS file
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const FourthContent = () => {
  return (
    <ScrollAnimation animateIn="slideInUp">
    <div className="container">
      <div className='m-5'><h1>Digital Evolution</h1></div>
      <div className="row">
        <div className="col-md-6">
          <div className="card large-card">
            <img src="https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg" className="card-img-top" alt="Large Card" />
            <div className="card-img-overlay">
              <h3 className="card-title">Large Card</h3>
              <p className="card-text">This is a larger card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card small-card">
            <img src="https://www.iss.nus.edu.sg/images/default-source/default-album/software-dev.jpg?Status=Master&sfvrsn=aa8aa05f_0" className="card-img-top" alt="Small Card 1" />
            <div className="card-body">
              <h5 className="card-title">Small Card 1</h5>
              <p className="card-text">This is a smaller card with supporting text below as a natural lead-in to additional content.</p>
              <span>Go Somewhere   <FaRegArrowAltCircleRight className="mask-icon" size={24} /></span>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card small-card">
            <img src="https://www.ismartrecruit.com/upload/blog/main_image/6_ways_to_find_and_hire_developers_at_a_low_cost.jpg" className="card-img-top" alt="Small Card 2" />
            <div className="card-body">
              <h5 className="card-title">Small Card 2</h5>
              <p className="card-text">This is a smaller card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ScrollAnimation>
  );
}

export default FourthContent;
