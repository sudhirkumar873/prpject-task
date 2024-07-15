import React from 'react';
import { BsArrowDownCircle } from "react-icons/bs";
import BallImage from "../../assets/images/ball.jpeg";
import Magnet from "../../assets/images/magnet.jpeg";
import "./FirstContent.css"; // Import CSS for this component
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';


const FirstContent = () => {
    return (
        <ScrollAnimation animateIn="slideInUp">
            <div className='m-5'>
                <div className='m-1 p-5'><h7>Who We Are</h7></div>
                <div ><h1><b>Championing the future<br />
                    of the digital bold
                </b></h1></div>
                <div className='m-5'>
                    <h6>Lorem ipsum dolor sit amet, possim cetero in cum, legimus legendos at nec.<br />
                        Ut nam alii lobortis, eos propriae scaevola theophrastus et. Ei eam utinam<br />
                        melius voluptatum, facete nostrud mea te, sed inermis ceteros ei.</h6>
                </div>
                <div className="mb-5"><b><h5>Download the digital transformation report for the new age banking</h5></b></div>
                <div className="py-5"><b> Download Now</b> <BsArrowDownCircle size={24} /></div>

                {/* Image Section with Animations */}
                <div className="image-section">
                    {/* First Ball */}
                    <img src={Magnet} alt="Magnet Image" className="magnet-image animated-logo-right" />
                    {/* First Magnet */}
                    <img src={BallImage} alt="Ball Image" className="ball-image animated-logo-left" />
                    {/* Second Ball (blurred) */}
                    <img src={BallImage} alt="Ball Image" className="ball-image blurred-image animated-logo-left-2" />
                    {/* Second Magnet (blurred) */}
                    <img src={Magnet} alt="Magnet Image" className="magnet-image blurred-image animated-logo-right-2" />
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default FirstContent;
