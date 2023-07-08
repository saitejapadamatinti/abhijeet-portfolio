import React, { useEffect, useState } from "react";
import Axios from "axios";
import { MoonLoader } from "react-spinners";
import HomeBlogCard from "./homeBlogCard";
import "./index.css";
import { BiDownload } from "react-icons/bi";
import HomeSectionNumber from "../homeSectionNumbers";
import { Link } from "react-router-dom";

const projectUrl = "http://localhost:3005/allProjects";

const BlogPage = () => {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProjectDataFromApi = async () => {
    setIsLoading(true);
    const data = await Axios(projectUrl);
    const soretedData = data.data.sort(
      (objA, objB) =>
        Number(new Date(objB.blogDate)) - Number(new Date(objA.blogDate))
    );
    setBlogData(soretedData);
    setIsLoading(false);
  };

  useEffect(() => {
    getProjectDataFromApi();
  }, []);

  return (
    <>
      <div>
        <HomeSectionNumber number={"06"} content={"Blogs"} />
      </div>
      <div className="home-blog-section-main-div">
        {blogData.slice(0, 3).map((eachData) => (
          <HomeBlogCard blogData={eachData} />
        ))}
      </div>
      <Link className="home-blog-section-link-button" to='/blogs'>
        <div className="home-blog-button-section">
          <button className="outline-button-2">View More</button>
        </div>
      </Link>
    </>
  );
};

export default BlogPage;
