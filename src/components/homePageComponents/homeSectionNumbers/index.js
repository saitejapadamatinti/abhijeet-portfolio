import React from "react";
import "./index.css";

const HomeSectionNumber = ({number, content}) => {
  return (
    <div className="home-section-number-main-div">
      <div className="home-section-number">{number}</div>
      <h1 className="home-section-name ">{content}</h1>
    </div>
  );
};

export default HomeSectionNumber;
