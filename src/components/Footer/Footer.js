import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { GoArrowRight } from "react-icons/go";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2b094a', color: 'white' }} className="mt-auto py-3">
      <div className="d-flex flex-row justify-content-between p-5">
        <div className="col-12 col-md-5 col-lg-4 mb-4">
          <h3>Industry news and insights straight into your inbox</h3>
        </div>
        <div className="d-flex flex-row col-6 custom-border justify-content-between align-items-center p-3">
          <h5>Enter Your Email ID</h5>
          <span>Submit<GoArrowRight className="mask-icon" size={24} /></span>
        </div>
      </div>
      <hr style={{ borderTop: '1px solid white', width: '80%', margin: '0 auto 20px' }} />
      <div className="flex-column justify-content-center mb-5">
        <span><h4>LOGO</h4></span>
        <span><h6><strong>Synethron</strong></h6></span>
      </div>
      <div className="d-flex flex-row justify-content-center mb-5">
        <span className="mx-4"><h5>Blog</h5></span>
        <span className="mx-4"><h5>News</h5></span>
        <span className="mx-4"><h5>Terms & Conditions</h5></span>
        <span className="mx-4"><h5>Privacy Policy</h5></span>
      </div>
      <div className="container text-center">
        <div className="mb-5">
          <a href="https://www.facebook.com" className="text-white mx-4">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.linkedin.com" className="text-white mx-4">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.twitter.com" className="text-white mx-4">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.youtube.com" className="text-white mx-4">
            <FaYoutube size={24} />
          </a>
          <a href="https://www.instagram.com" className="text-white mx-4">
            <FaInstagram size={24} />
          </a>
        </div>
        <span>&copy; 2023 Visionet Systems. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
