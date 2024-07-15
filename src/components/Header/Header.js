import React from 'react';
import "./Header.css";
import "animate.css/animate.compat.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import BallImage from "../../assets/images/ball.jpeg";
import Magnet from "../../assets/images/magnet.jpeg";
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const Header = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        {/* First Slide */}
        <div className="carousel-item active slide-one" data-bs-interval="10000">
          <div className="background-color" style={{ color: "white" }}>
            <div>
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex flex-row justify-content-center">
                  <div className="flex-column justify-content-center px-5 color-white">
                    <span><h4>LOGO</h4></span>
                    <span><h6><strong>Synethron</strong></h6></span>
                  </div>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse d-flex flex-row justify-content-center">
                    <div className="navbar-nav d-flex justify-content-between">
                      <a className="nav-link px-5" aria-current="page" href="#">About</a>
                      <a className="nav-link px-5" href="#">Industries</a>
                      <a className="nav-link px-5" href="#">Services</a>
                      <a className="nav-link px-5" href="#">Product & Services</a>
                      <a className="nav-link px-5" href="#">Insights</a>
                    </div>
                  </div>
                  <div className="px-5">
                    <div style={{ border: '1px solid white', padding: '10px', width: '125px' }}>Contact</div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="d-flex flex-row justify-content-right text-align-left full-width">
              <div className="half-width align-items-center mt-4 text-left position-relative">
                <h2 className="big-text">Reimage your<br /> business,<br /> recalibrate<br /> your potential.</h2>
                <h6 className="subtitle">Navigate today's challenges, embrace change to lead the future</h6>
                <span>Explore    <FaRegArrowAltCircleRight className="mask-icon" size={24} /></span>
                <img src={Magnet} className="small-logo-left" alt="Magnet" />
              </div>
              <div className="half-width mb-2 position-relative">
                <img src={BallImage} style={{ backgroundColor: 'blue' }} alt="Small Logo" className="small-logo animated-logo" />
                <img src="https://media.tenor.com/7fnmYQ82UjUAAAAi/satisfying-illusion.gif" alt="Satisfying Illusion" className="img-fluid" />
              </div>
            </div>
            <div className="centered-logo-container">
              <img src={BallImage} alt="Centered Ball Logo" className="centered-logo animated-logo-center" />
            </div>
            <div className="top-left-logo-container">
              <img src={BallImage} alt="Top Left Ball Logo" className="top-left-logo animated-logo-top-left" />
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className="carousel-item slide-two" data-bs-interval="10000">
          <div className="background-color" style={{ color: "white" }}>
            <div>
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex flex-row justify-content-center">
                  <div className="flex-column justify-content-center px-5 color-white">
                    <span><h4>LOGO</h4></span>
                    <span><h6><strong>Synethron</strong></h6></span>
                  </div>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse d-flex flex-row justify-content-center">
                    <div className="navbar-nav d-flex justify-content-between">
                      <a className="nav-link px-5" aria-current="page" href="#">About</a>
                      <a className="nav-link px-5" href="#">Industries</a>
                      <a className="nav-link px-5" href="#">Services</a>
                      <a className="nav-link px-5" href="#">Product & Services</a>
                      <a className="nav-link px-5" href="#">Insights</a>
                    </div>
                  </div>
                  <div className="px-5">
                    <div style={{ border: '1px solid white', padding: '10px', width: '125px' }}>Contact</div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="d-flex flex-row justify-content-right text-align-left full-width">
              <div className="half-width align-items-center mt-4 text-left position-relative">
                <h2 className="big-text">Reimage your<br /> business,<br /> recalibrate<br /> your potential.</h2>
                <h6 className="subtitle">Navigate today's challenges, embrace change to lead the future</h6>
                <span>Explore    <FaRegArrowAltCircleRight className="mask-icon" size={24} /></span>
                <img src={Magnet} className="small-logo-left" alt="Magnet" />
              </div>
              <div className="half-width mb-2 position-relative">
                <img src={BallImage} style={{ backgroundColor: 'blue' }} alt="Small Logo" className="small-logo animated-logo" />
                <img src="https://media1.tenor.com/m/f7BpnV-MUUEAAAAd/kot-kols.gif" alt="Satisfying Illusion" className="img-fluid" style={{borderRadius:"750px", height:'450px', width:'450px'}}/>
              </div>
            </div>
            <div className="centered-logo-container">
              <img src={BallImage} alt="Centered Ball Logo" className="centered-logo animated-logo-center" />
            </div>
            <div className="top-left-logo-container">
              <img src={BallImage} alt="Top Left Ball Logo" className="top-left-logo animated-logo-top-left" />
            </div>
          </div>
        </div>

        {/* Third Slide */}
        <div className="carousel-item slide-three" data-bs-interval="10000">
          <div className="background-color" style={{ color: "white" }}>
            <div>
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex flex-row justify-content-center">
                  <div className="flex-column justify-content-center px-5 color-white">
                    <span><h4>LOGO</h4></span>
                    <span><h6><strong>Synethron</strong></h6></span>
                  </div>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse d-flex flex-row justify-content-center">
                    <div className="navbar-nav d-flex justify-content-between">
                      <a className="nav-link px-5" aria-current="page" href="#">About</a>
                      <a className="nav-link px-5" href="#">Industries</a>
                      <a className="nav-link px-5" href="#">Services</a>
                      <a className="nav-link px-5" href="#">Product & Services</a>
                      <a className="nav-link px-5" href="#">Insights</a>
                    </div>
                  </div>
                  <div className="px-5">
                    <div style={{ border: '1px solid white', padding: '10px', width: '125px' }}>Contact</div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="d-flex flex-row justify-content-right text-align-left full-width">
              <div className="half-width align-items-center mt-4 text-left position-relative">
                <h2 className="big-text">Reimage your<br /> business,<br /> recalibrate<br /> your potential.</h2>
                <h6 className="subtitle">Navigate today's challenges, embrace change to lead the future</h6>
                <span>Explore    <FaRegArrowAltCircleRight className="mask-icon" size={24} /></span>
                <img src={Magnet} className="small-logo-left" alt="Magnet" />
              </div>
              <div className="half-width mb-2 position-relative">
                <img src={BallImage} style={{ backgroundColor: 'blue' }} alt="Small Logo" className="small-logo animated-logo" />
                <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXhneWNnazhxZGFkbnd3Mm5temN4ZHd6b3QxY3J6c2VjdHprcTZiaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT8qB7S0N5g64YNazC/giphy.webp" alt="Satisfying Illusion" className="img-fluid" style={{borderRadius:"750px", height:'450px', width:'450px'}}/>
              </div>
            </div>
            <div className="centered-logo-container">
              <img src={BallImage} alt="Centered Ball Logo" className="centered-logo animated-logo-center" />
            </div>
            <div className="top-left-logo-container">
              <img src={BallImage} alt="Top Left Ball Logo" className="top-left-logo animated-logo-top-left" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
