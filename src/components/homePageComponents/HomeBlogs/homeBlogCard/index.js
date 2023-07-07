import React from "react";
import "./index.css";
import { BsDot } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    <div className="home-blog-card-main-div">
      <div className="home-blog-card-image-div">
        <img
          className="home-blog-card-image"
          alt="blog-imag-1"
          src="/images/blog-image-1.png"
        />
      </div>
      <div className="home-blog-card-content-container">
        <h1 className="home-blog-card-heading-2">{blogData.bloghead}</h1>
        <p className="home-blog-description-para">{blogData.blogContent}</p>

        <div className="home-blog-card-date-div">
          <div className="home-blog-card-date-and-heart-card">
            <span className="text-light-color">
              {blogMonth} {blogDay}, {blogYear}
            </span>
            <span>
              <BsDot className="home-blog-card-dot-icon" />
            </span>
            <span className="home-blog-love-icon-span">
              <AiFillHeart className="home-blog-card-heart-icon" />
            </span>
            <span className=" text-light-color">{blogData.likes}</span>
          </div>
          <Link
            className="home-blog-para-read-more-text-link"
            onClick={() => {
              window.location.href = `/blog/${blogData._id}`;
            }}
            to={`/blog/${blogData._id}`}
          >
            <span className="home-blog-para-read-more-text">Read more</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
