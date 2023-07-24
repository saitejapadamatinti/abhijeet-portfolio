import React from "react";
import "./index.css";
import { BsBoxArrowUp, BsDot } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { useParams, Link } from "react-router-dom";

const base_url = process.env.REACT_APP_MY_VARIABLE;
const page_url = window.origin

const HorizentaLineWithDate = ({ blogDate, likes }) => {
  const blogYear = new Date(blogDate).getFullYear();
  const blogDay = new Date(blogDate).getDate();
  const blogMonthnumber = new Date(blogDate).getMonth();

  function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber);
    return date.toLocaleString("en-US", { month: "short" });
  }

  const params = useParams();
  const { id } = params;
  const url = `${page_url}/blog/${id}`;

  const blogMonth = getMonthName(blogMonthnumber);

  const onClickShareButton = async () => {
    await navigator.clipboard.writeText(url);
    alert('Text copied');
  }

  return (
    <div className="horizental-line-date-main-div">
      <hr className="horizental-line-line" />
      <div>
        <div className="horizental-line-date-div">
          <div className="horizental-line-date-and-heart-card">
            <span className="text-light-color">
              {blogMonth} {" "}
              {blogDay},{" "}{blogYear}
            </span>
            <span>
              <BsDot className="horizental-line-dot-icon" />
            </span>
            <span className=" text-light-color">3 min read</span>
          </div>
          <span className="horizental-line-read-more-text">
            <BsBoxArrowUp onClick={onClickShareButton} className="text-light-color" />
          </span>
        </div>
      </div>
      <hr className="horizental-line-line" />
    </div>
  );
};

export default HorizentaLineWithDate;
