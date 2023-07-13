import React, { useState } from "react";
import "./index.css";
import { MdEmail } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const AboutSection = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <div className="about-images-container">
        <div className="about-card-user-box">
          <div className="user-images-div">
            <img
              alt="user about imag"
              className="about-user-image-person"
              src="/images/about-user-image.png"
            />
          </div>

          <div className="about-images-container-content-div">
            <h2>Abhijeet Patil</h2>
            <div className="about-icons-div">
              <MdEmail className="about-icon" />
              <GrFacebookOption className="about-icon" />
              <FaLinkedinIn className="about-icon" />
              <AiFillInstagram className="about-icon" />
            </div>
            <p>
              Ready to make words dance? Send me a message and let's create a
              symphony of delightful conversation. 😊
            </p>
          </div>
        </div>
      </div>
      <div className="about-section-content">
        <p>
          With a deep-rooted passion for marketing and branding, I am Abhijeet
          Patil, an experienced professional dedicated to driving business
          success through strategic thinking, innovative ideas, and a relentless
          pursuit of excellence. As a marketing enthusiast, I possess a unique
          blend of skills, education, and hands-on experiences that set me apart
          in the industry.
        </p>
        <br />
        <p>
          Combining my technical foundation with a keen business acumen, I have
          developed a versatile skill set encompassing strategic marketing,
          brand management, product marketing, and lead generation. My
          proficiency in market research, competitor analysis, and consumer
          behavior allows me to craft effective marketing strategies that
          resonate with target audiences and drive tangible results.
          Furthermore, my entrepreneurial mindset empowers me to think outside
          the box, identifying innovative solutions and leveraging emerging
          trends to stay ahead of the curve.
        </p>
        <br />
        <p>
          What truly sets me apart is my unwavering passion for marketing and
          branding. I view each project as an opportunity to tell a captivating
          story, engage with audiences on a deeper level, and create lasting
          connections between brands and consumers. My innate ability to blend
          analytical thinking with creative flair enables me to develop unique
          strategies that not only deliver results but also leave a lasting
          impact. I am constantly seeking new challenges and opportunities to
          push the boundaries of what is possible in the field of marketing.
        </p>
      </div>
      <div className="about-section-content-mobile">
        <p>
          With a deep-rooted passion for marketing and branding, I am Abhijeet
          Patil, an experienced professional dedicated to driving business
          success through strategic thinking, innovative ideas, and a relentless
          pursuit of excellence. As a marketing enthusiast, I possess a unique
          blend of skills, education, and hands-on experiences that set me apart
          in the industry.
        </p>
        <br />
        <p>
          Combining my technical foundation with a keen business acumen, I have
          developed a versatile skill set encompassing strategic marketing,
          brand management, product marketing, and lead generation. My
          proficiency in market research, competitor analysis, and consumer
          behavior allows me to craft effective marketing strategies that
          resonate with target audiences and drive tangible results.
          Furthermore, my entrepreneurial mindset empowers me to think outside
          the box, identifying innovative solutions and leveraging emerging
          trends to stay ahead of the curve.
        </p>
        <br />
        {readMore === true && (
          <p className="mobile-about-read-more">
            What truly sets me apart is my unwavering passion for marketing and
            branding. I view each project as an opportunity to tell a
            captivating story, engage with audiences on a deeper level, and
            create lasting connections between brands and consumers. My innate
            ability to blend analytical thinking with creative flair enables me
            to develop unique strategies that not only deliver results but also
            leave a lasting impact. I am constantly seeking new challenges and
            opportunities to push the boundaries of what is possible in the
            field of marketing.
          </p>
        )}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore === true ? "Read Less" : "Read More"}
        </button>
      </div>
    </>
  );
};

export default AboutSection;
