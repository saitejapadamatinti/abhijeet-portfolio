import React from "react";
import "./index.css";

const SkillCard = ({ skillName }) => {
  console.log(skillName);
  return (
    <div className="skillcard-bg-image">
      <div className="skil-card-head-div">
        <dvi className="skill-icon-div-bg">{skillName.skillIcon}</dvi>
        <h1 className="skill-card-main-text">{skillName.skillName}</h1>
      </div>
    </div>
  );
};

export default SkillCard;
