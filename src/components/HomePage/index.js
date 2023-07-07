import React from "react";
import "./index.css";
import HomeSectionNumber from "../homePageComponents/homeSectionNumbers";
import ProfessionalTabCard from "../homePageComponents/professionalSection/professionalTabCard";
import ProfessionalSection from "../homePageComponents/professionalSection/professionalSection";
import { BiDownload } from "react-icons/bi";
import AccordionComponent from "../homePageComponents/Accordion";
import SkillCard from "../homePageComponents/skillsCard";
import Education from "../homePageComponents/education";

const skills = [
  "Marketing Strategy",
  "Digital Marketing",
  "Analytics and Data Interpretation",
  "Branding",
  "Market Research",
  "Copywriting and Content Creation",
  "Communication Skills",
  "Project Management",
  "Creative Thinking",
  "UI/UX",
  "Wordpress",
];

const educationData = [
  {
    id: "1",
    univercityName: "Cranfield University",
    course: "Cranfield School of Management",
    stream: "MSc in Strategic Marketing",
    date: "Sep. 2023 - Sep. 2024",
    location: "Bedfordshire, United Kingdom",
    image: "/images/education-logo-2.png",
  },
  {
    id: "2",
    univercityName: "Dr. Vishwanath Karad MIT World Peace University",
    course: "Bachelor of Technology (B. Tech)",
    stream: "Civil Engineering (CGPA 8.37)",
    date: "Jun. 2018 - Jun. 2022",
    location: "Pune, Maharashtra, India",
    image: "/images/education-logo-1.png",
  },
];

const HomePage = () => {
  return (
    <>
      <div className="main-width-container">
        <div className="middle-width-container">
          <div className="home-banner-div height-100vh">
            <div className="home-banner-image-main-div">
              <div className="home-banner-img-outline">
                <div className=" home-banner-img-outline-2">
                  {/* <h1 className="home-banner-image-icon">Saiteja</h1> */}
                  <img
                    className="home-banner-image"
                    alt="use-iamge"
                    src="/images/user-image.png"
                  />
                </div>
              </div>
            </div>
            <div className="home-banner-heading-div">
              <h1 className="home-banner-heading main-head-color">
                Hi! I am Abhijeet. <a href="#ss"> This </a> is My Journey of{" "}
                <div class="scroller">
                  <span>
                    Cool
                    <br />
                    Art
                    <br />
                    Intruiging
                    <br />
                    sai
                    <br />
                    Challenging
                  </span>
                </div>
                {/* <div class="carousel">
              <div class="change_outer">
                <div class="change_inner">
                  <div class="element">Engaging.</div>
                  <div class="element">Crafting.</div>
                  <div class="element">Storytelling.</div>
                  <div class="element">Branding.</div>
                  <div class="element">Marketing.</div>
                </div>
              </div>
              </div>
               */}
              </h1>
              <p className="home-banner-para">
                Creating Impactful Marketing Campaigns and Building Strong
                Brands for Sustainable Success.
              </p>
              <div className="home-banner-buttons-div">
                <button className="outline-button">
                  <BiDownload className="download-button-icon" /> Resume
                </button>
                <button className="color-button">Resume</button>
              </div>
            </div>
          </div>

          <div>
            {/* <img className="about-section-line" src="/images/Vector 2.png" />
          <img className="about-section-arrow-icon" src="/images/Add a heading (12) 1.png" /> */}
            <div className="section-number-div">
              <HomeSectionNumber number={"01"} content={"About Me"} />
            </div>
            <div className="about-main-container height-100vh">
              {/* <div className="about-images-container">
                <div className="about-images-div-1">
                  <div className="about-images-1">
                    <img
                      className="about-user-images"
                      alt="use-iamge"
                      src="/images/Rectangle 196.png"
                    />
                  </div>
                  <div className="about-images-2">
                    <img
                      className="about-user-images"
                      alt="use-iamge"
                      src="/images/user-image.png"
                    />
                  </div>
                </div>
                <div className="about-images-div-2">
                  <div className="about-images-3"></div>
                  <div className="about-images-4">
                    <img
                      className="about-user-images"
                      alt="use-iamge"
                      src="/images/Rectangle 202.png"
                    />
                  </div>
                </div>
                <div className="about-images-div-3">
                  <div className="about-images-5">
                    <img
                      className="about-user-images"
                      alt="use-iamge"
                      src="/images/Rectangle 200.png"
                    />
                  </div>
                  <div className="about-images-6"></div>
                  <div className="about-images-7"></div>
                </div>
              </div> */}
              <div className="about-images-container">
                <div className="about-card-user-box">
                  <div class="about-box-card-animation">
                    <div class="wave -one"></div>
                    <div class="wave -two"></div>
                    <div class="wave -three"></div>
                  </div>
                </div>
              </div>
              <div className="about-section-content">
                <p>
                  With a deep-rooted passion for marketing and branding, I am
                  Abhijeet Patil, an experienced professional dedicated to
                  driving business success through strategic thinking,
                  innovative ideas, and a relentless pursuit of excellence. As a
                  marketing enthusiast, I possess a unique blend of skills,
                  education, and hands-on experiences that set me apart in the
                  industry.
                </p>
                <br />
                <p>
                  Combining my technical foundation with a keen business acumen,
                  I have developed a versatile skill set encompassing strategic
                  marketing, brand management, product marketing, and lead
                  generation. My proficiency in market research, competitor
                  analysis, and consumer behavior allows me to craft effective
                  marketing strategies that resonate with target audiences and
                  drive tangible results. Furthermore, my entrepreneurial
                  mindset empowers me to think outside the box, identifying
                  innovative solutions and leveraging emerging trends to stay
                  ahead of the curve.
                </p>
                <br />
                <p>
                  What truly sets me apart is my unwavering passion for
                  marketing and branding. I view each project as an opportunity
                  to tell a captivating story, engage with audiences on a deeper
                  level, and create lasting connections between brands and
                  consumers. My innate ability to blend analytical thinking with
                  creative flair enables me to develop unique strategies that
                  not only deliver results but also leave a lasting impact. I am
                  constantly seeking new challenges and opportunities to push
                  the boundaries of what is possible in the field of marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="ss" className="main-width-container height-100vh">
        <div className="profession-main-div">
          <div className="middle-width-container">
            <div>
              <HomeSectionNumber
                number={"02"}
                content={"Professional Experience"}
              />
            </div>
            <ProfessionalSection />
          </div>
        </div>
      </div>
      <div id="ss" className="main-width-container" >
        <div className="middle-width-container">
          <div className="section-number-div">
            <HomeSectionNumber number={"03"} content={"Skills"} />
          </div>
        </div>
      </div>
      {/* <marquee scrollamount="10"> */}
      <div id="to-left-scroll-container">
        <div id="to-left-scroll-text">
          <div className="skill-card-div">
            {skills.slice(0, 6).map((eachSkill) => (
              <SkillCard skillName={eachSkill} />
            ))}
          </div>
        </div>
      </div>
      <div id="to-right-scroll-container">
        <div id="to-right-scroll-text">
          <div className="skill-card-div">
            {skills.slice(6).map((eachSkill) => (
              <SkillCard skillName={eachSkill} />
            ))}
          </div>
        </div>
      </div>

      {/* </marquee> */}
      <div className="main-width-container height-100vh">
        <div className="middle-width-container">
          <div>
            <HomeSectionNumber number={"04"} content={"Education"} />
          </div>
          <br />
          <div className="education-div-main-component">
            {educationData.map((each) => (
              <Education educationData={each} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
