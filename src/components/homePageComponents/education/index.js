import React from "react";
import "./index.css";

const Education = ({ educationData }) => {
  return (
    // <div className="education-component-header">
    //   <div >
    //     <div className="education-img-div">
    //       <img className="education-logo" alt={educationData.univercityName} src={educationData.image} />
    //     </div>
    //   </div>
    //   {/* <div>
    //     <div>
    //       <hr />
    //     </div>
    //   </div> */}
    //   <div className="education-font-div">
    //     <div>
    //       <h3 className="education-head-1">{educationData.univercityName}</h3>
    //       <p className="education-para">{educationData.date}</p>
    //     </div>
    //     <div>
    //       <h3 className="education-head-2">{educationData.course}</h3>
    //       <p className="education-para">{educationData.location}</p>
    //     </div>
    //     <div>
    //     <p className="education-head-3">{educationData.stream}</p>
    //     </div>
    //   </div>
    // </div>
    <div className="eaducation-component-card-div">
      <div>
       <div className="education-unvercity-img-div">
       <img
          alt="univercity img"
          className="education-college-image"
          src="/images/education-image-1.png"
        />
       </div>
        <div className="education-img-div">
          <img
            className="education-logo"
            alt={educationData.univercityName}
            src={educationData.image}
          />
        </div>
      </div>

      <div>
        <div className="education-font-div ">
          <h3 className="education-head-1">{educationData.univercityName}</h3>
          <div>
            <h3 className="education-head-2">{educationData.course}</h3>
            <p className="education-head-3">{educationData.stream}</p>
          </div>
          <div>
            <p className="education-para">{educationData.date}</p>
            <p className="education-para">{educationData.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
