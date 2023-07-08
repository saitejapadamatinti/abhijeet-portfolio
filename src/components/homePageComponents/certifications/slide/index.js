import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./index.css";

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
];
const CertificateSlider = () => {
  return (
    <div>
      <Slide
        className="certificate-slide-div"
        slidesToScroll={1}
        slidesToShow={1}
        indicators={true}
        autoplay={false}
        responsive={[
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ]}
      >
        <div>
          <div>
            <div className="certificate-card-main-div">
              <div className="certificate-imag-div">
                <img src="/images/certificate1.png" />
              </div>
              <div>
                <h1>Innovation, Business Models, and Entrepreneurship</h1>
                <p>Indian Institute of Technology-Roorkee </p>
                <p>Online</p>
              </div>
            </div>
          </div>
          <div>
            <div className="certificate-card-main-div">
              <div className="certificate-imag-div">
                <img src="/images/certificate1.png" />
              </div>
              <div>
                <h1>Innovation, Business Models, and Entrepreneurship</h1>
                <p>Indian Institute of Technology-Roorkee </p>
                <p>Online</p>
              </div>
            </div>
          </div>
          <div>
            <div className="certificate-card-main-div">
              <div className="certificate-imag-div">
                <img src="/images/certificate1.png" />
              </div>
              <div>
                <h1>Innovation, Business Models, and Entrepreneurship</h1>
                <p>Indian Institute of Technology-Roorkee </p>
                <p>Online</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="certificate-card-main-div">
              <div className="certificate-imag-div">
                <img src="/images/certificate1.png" />
              </div>
              <div>
                <h1>Innovation, Business Models, and Entrepreneurship</h1>
                <p>Indian Institute of Technology-Roorkee </p>
                <p>Online</p>
              </div>
            </div>
          </div>
          <div>
            <div className="certificate-card-main-div">
              <div className="certificate-imag-div">
                <img src="/images/certificate1.png" />
              </div>
              <div>
                <h1>Innovation, Business Models, and Entrepreneurship</h1>
                <p>Indian Institute of Technology-Roorkee </p>
                <p>Online</p>
              </div>
            </div>
          </div>
          <div>
            <div className="certificate-card-main-div">
              <div className="certificate-imag-div">
                <img src="/images/certificate1.png" />
              </div>
              <div>
                <h1>Innovation, Business Models, and Entrepreneurship</h1>
                <p>Indian Institute of Technology-Roorkee </p>
                <p>Online</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default CertificateSlider;
