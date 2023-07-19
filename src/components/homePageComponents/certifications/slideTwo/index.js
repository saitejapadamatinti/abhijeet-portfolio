import React, { useState } from "react";
import Slider from "react-slick";
import "./index.css";


const SlideTwo = () => {
  const [slideNumber, setSlideNumber] = useState(0);

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        },
      },
    ],
  };
  return (
    <div className="sides-main-slide-div">
      <Slider {...settings}>
        {/* {
            
        } */}
        <div className="cetificate-div-slider">
          <div className="certificate-card-main-div">
            <div className="certificate-imag-div">
              <img src="/images/certificate1.png" />
            </div>
            <div className="certificate-card-content-box">
              <h1>Innovation, Business Models, and Entrepreneurship</h1>
              <p>Indian Institute of Technology-Roorkee </p>
              <span>Online</span>
            </div>
          </div>
          <div className="certificate-card-main-div">
            <div className="certificate-imag-div">
              <img src="/images/certificate1.png" />
            </div>
            <div className="certificate-card-content-box">
              <h1>Developing Soft Skills and Personality</h1>
              <p>Indian Institute of Technology-Kanpu </p>
              <span>Online</span>
            </div>
          </div>
          <div className="certificate-card-main-div">
            <div className="certificate-imag-div">
              <img src="/images/certificate1.png" />
            </div>
            <div className="certificate-card-content-box">
              <h1>Design Thinking Workshop</h1>
              <p>Etisalat Academy-Dubai </p>
              <span>offline</span>
            </div>
          </div>
        </div>
        <div className="cetificate-div-slider">
          <div className="certificate-card-main-div">
            <div className="certificate-imag-div">
              <img src="/images/certificate1.png" />
            </div>
            <div className="certificate-card-content-box">
              <h1>Brand Management: Aligning Business, Brand and Behaviour</h1>
              <p>University of London, London Business School</p>
              <span>Online</span>
            </div>
          </div>
          <div className="certificate-card-main-div">
            <div className="certificate-imag-div">
              <img src="/images/certificate1.png" />
            </div>
            <div className="certificate-card-content-box">
              <h1>Google Digital Marketing & E-commerce Professional Certificate</h1>
              <p>Google</p>
              <span>Online</span>
            </div>
          </div>
          <div className="certificate-card-main-div">
            <div className="certificate-imag-div">
              <img src="/images/certificate1.png" />
            </div>
            <div className="certificate-card-content-box">
              <h1>Marketing Analytics</h1>
              <p>University of Virginia</p>
              <span>Online</span>
            </div>
          </div>
        </div>
        <div className="cetificate-div-slider">
          <div className="certificate-card-main-div">
            <div className="certificate-imag-div">
              <img src="/images/certificate1.png" />
            </div>
            <div className="certificate-card-content-box">
              <h1>Programming for everybody (Getting Started with Python)</h1>
              <p>University of Michigan</p>
              <span>Online</span>
            </div>
          </div>
          <div className="certificate-card-main-div">
            <div className="certificate-imag-div">
              <img src="/images/certificate1.png" />
            </div>
            <div className="certificate-card-content-box">
              <h1>Attract and Engage Customers with Digital Marketing by Google</h1>
              <p>Google</p>
              <span>Online</span>
            </div>
          </div>
          <div className="certificate-card-main-div">
            <div className="certificate-imag-div">
              <img src="/images/certificate1.png" />
            </div>
            <div className="certificate-card-content-box">
              <h1>Learn Personal Branding</h1>
              <p>LinkedIn </p>
              <span>Online</span>
            </div>
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default SlideTwo;
