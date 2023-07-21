import React from "react";
import "./index.css";

const ProfessionalTabCard = (props) => {
  const { selectedCompany, professionalCardData } = props;

  const selectedTabColor =
    selectedCompany === professionalCardData.companyName
      ? "professional-tab-card-active"
      : "";

  return (
    <div className={`${selectedTabColor} professional-tab-card`}>
      <div className="professional-tab-card-img-div">
        <img
          alt="dd"
          className="professional-tab-card-img"
          src={professionalCardData.tabImage}
        />
      </div>

      <hr className="professional-tab-card-hr-line" />

      <div className="professional-card-content-div">
        <h4 className="professional-tab-card-head">
          {professionalCardData.companyName}
        </h4>
        <p className="professional-tab-card-para">
          {professionalCardData.role}
        </p>
      </div>
    </div>
  );
};

export default ProfessionalTabCard;
