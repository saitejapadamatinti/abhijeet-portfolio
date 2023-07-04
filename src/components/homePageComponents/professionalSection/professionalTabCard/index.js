import React from "react";
import "./index.css";

const ProfessionalTabCard = () => {
  return (
    // <div className="box">
    //   <div className="frame-wrapper">
    //     <div className="frame">
    //       <div className="overlap-group">
    //         <h1 className="text-wrapper">Innovation Hacks AI Pvt. Ltd.</h1>
    //         <div className="product-marketing">Product Marketing &amp; Management</div>
    //         <img className="line" alt="Line" src="line-4.svg" />
    //         <img
    //           className="original-logo-symbol"
    //           alt="Original logo symbol"
    //           src="original-logo-symbol-removebg-preview-1.png"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="professional-tab-card">
      <div className="professional-tab-card-img-div">
        <img alt="dd"
          className="professional-tab-card-img"
          src="/images/Original_Logo_Symbol-removebg-preview 1.png"
        />
      </div>

      <hr className="professional-tab-card-hr-line" />

      <div className="professional-card-content-div">
        <h4 className="professional-tab-card-head">
          Innovation Hacks AI Pvt. Ltd.{" "}
        </h4>
        <p className="professional-tab-card-para">
          Product Marketing & Management
        </p>
      </div>
    </div>
  );
};

export default ProfessionalTabCard;
