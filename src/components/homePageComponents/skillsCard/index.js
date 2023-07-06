import React from "react";
import "./index.css";

const SkillCard = ({ skillName }) => {
  return (
    <div className="skillcard-bg-image">
        <div className="skil-card-head-div">
      <h1 className="skill-card-main-text">{skillName}</h1>
      </div>
    </div>
  );
};

export default SkillCard;
