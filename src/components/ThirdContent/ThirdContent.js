import React from 'react';
import './ThirdContent.css';
import { GoArrowRight } from "react-icons/go";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';


const ThirdContent = () => {
  const cardData = [
    {
      title: 'Card title 1',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: 'https://www.theforage.com/blog/wp-content/uploads/2022/09/what-is-a-web-developer.jpg',
      link: '#',
    },
    {
      title: 'Card title 2',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: 'https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/653c5395a20cd20e8f4fb7b5_Freelance%20Software%20Developer%20Everything%20You%20Need%20To%20Know.webp',
      link: '#',
    },
    {
      title: 'Card title 3',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: 'https://imageio.forbes.com/specials-images/imageserve/5f0870ff02f81f00065035fe/Coworkers-discussing-computer-program-in-office/960x0.jpg?height=474&width=711&fit=bounds',
      link: '#',
    },
    {
      title: 'Card title 4',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      imgSrc: 'https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg',
      link: '#',
    },
  ];

  return (
    <ScrollAnimation animateIn="slideInUp">
    <div className="container">
      <div><h6>Case Studies</h6></div>
      <div><h1><b>Impact of ideas powered by<br />bold transformation</b></h1></div>
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-3" key={index}>
            <div className="card">
              <img src={card.imgSrc} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <span>Explore More    <FaRegArrowAltCircleRight className="mask-icon" size={24} /></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </ScrollAnimation>
  );
}

export default ThirdContent;
