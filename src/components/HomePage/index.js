import React, { useEffect, useState } from "react";
import "./index.css";
import HomeSectionNumber from "../homePageComponents/homeSectionNumbers";
import ProfessionalTabCard from "../homePageComponents/professionalSection/professionalTabCard";
import ProfessionalSection from "../homePageComponents/professionalSection/professionalSection";
import { BiDownload } from "react-icons/bi";
import AccordionComponent from "../homePageComponents/Accordion";
import SkillCard from "../homePageComponents/skillsCard";
import Education from "../homePageComponents/education";
import Certificates from "../homePageComponents/certifications";
import HomeBlogs from "../homePageComponents/HomeBlogs";
import Navebar from "../navbar/header";
import ScrollTracker from "../navbar/nav";
import AboutSection from "../homePageComponents/About";

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
    location: "Bedfordshire, UK",
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
  const [current, setCurrent] = useState("#Education");
  console.log(current)
  window.location.replace(`http://localhost:3000/${current}`);
  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log(position);
    if (772 < position < 1920) {
      setCurrent("#About");
    } else if (1921 < position < 2374) {
      setCurrent("#ProfessionalExperience");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navebar />
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
              <h1 class="ms-header__title">
                Hi! I am Abhijeet. <br /> This My Journey <br /> of
                <div class="ms-slider">
                  <ul class="ms-slider__words">
                    <li class="ms-slider__word ms-slider-word-1">Marketing.</li>
                    <li class="ms-slider__word ms-slider-word-2">Branding.</li>
                    <li class="ms-slider__word ms-slider-word-3">
                      Storytelling.
                    </li>
                    <li class="ms-slider__word ms-slider-word-4">Crafting.</li>
                    <li class="ms-slider__word ms-slider-word-1">Engaging.</li>
                  </ul>
                </div>
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

          <div id="AboutMe">
            {/* <img className="about-section-line" src="/images/Vector 2.png" />
          <img className="about-section-arrow-icon" src="/images/Add a heading (12) 1.png" /> */}
            <div className="section-number-div">
              <HomeSectionNumber number={"01"} content={"About Me"} />
            </div>
            <div className="about-main-container height-100vh">
             <AboutSection />
            </div>
          </div>
        </div>
      </div>
      <div
        id="ProfessionalExperience"
        className="main-width-container height-100vh"
      >
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
      <div id="Skills" className="main-width-container">
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
      <div id="Education" className="main-width-container height-100vh">
        <div className="middle-width-container">
          <div>
            <HomeSectionNumber number={"04"} content={"Education"} />
            <p></p>
          </div>
          <br />
          <div className="education-div-main-component">
            {educationData.map((each) => (
              <Education educationData={each} />
            ))}
          </div>
        </div>
      </div>
      <div id="Certifications" className="main-width-container height-100vh">
        <div className="profession-main-div">
          <div className="middle-width-container">
            <div className="section-number-div">
              <HomeSectionNumber
                number={"05"}
                content={"Certifications"}
              />
            </div>
            <Certificates />

          </div>
        </div>
      </div>
      <div id="Blogs" className="main-width-container height-100vh">
        <div className="middle-width-container">
          <HomeBlogs />
        </div>
      </div>
    </>
  );
};

export default HomePage;
