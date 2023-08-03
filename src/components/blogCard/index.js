import React from "react";
import "./index.css";
import { BsDot } from "react-icons/bs";

const BlogCard = ({ blogData }) => {
  const blogYear = new Date(blogData.blogDate).getFullYear();
  const blogDay = new Date(blogData.blogDate).getDate();
  const blogMonthnumber = new Date(blogData.blogDate).getMonth();

  function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber);
    return date.toLocaleString("en-US", { month: "short" });
  }

  const blogMonth = getMonthName(blogMonthnumber);

  return (
    <div className="blog-card-main-div">
      <div className="blog-card-image-div">
        <img
          className="blog-card-image"
          alt="blog-imag-1"
          src={blogData.blogImage}
        />
      </div>
      <div className="blog-card-content-container">
        <h1 className="heading-2">{blogData.bloghead}</h1>
        <p className="blog-description-para">{blogData.blogContent}</p>

        <div className="blog-card-date-div">
          <div className="blog-card-date-and-heart-card">
            <span className="text-light-color">
              {blogMonth} {blogDay}, {blogYear}
            </span>
            <span>
              <BsDot className="blog-card-dot-icon" />
            </span>
            <span className=" text-light-color">3 min read</span>
          </div>
          <a
            className="blog-para-read-more-text-a"
            href={`/blog/${blogData._id}`}
          >
            <span className="blog-para-read-more-text">Read more</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
