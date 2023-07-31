import React, { useEffect, useState } from "react";
import BlogCard from "../blogCard";
import Axios from "axios";
import { MoonLoader } from "react-spinners";
import "./index.css"
import HomeBlogCard from '../homePageComponents/HomeBlogs/homeBlogCard'

const base_url = process.env.REACT_APP_MY_VARIABLE;


const BlogPage = () => {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProjectDataFromApi = async () => {
    setIsLoading(true);
    const data = await Axios(`${base_url}/allBlogs`);
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

  if (isLoading && true) {
    return (
      <>
        <div className="loader-class">
          <MoonLoader color="#0c7fb0" />
        </div>
      </>
    );
  }

  return (
    <div className="main-width-container">
      <div className="middle-width-container">
        <div className="blog-details-main-head-container blog-details-main-head-container-blogs">
          <h1 className="blog-details-main-head-banner">Blogs</h1>
        </div>
        {blogData.map((eachData) => (
          <>
            <div className="desktop-blog-cards">
              <BlogCard blogData={eachData} />
            </div>
            <div className="mobole-blog-card">
              <HomeBlogCard blogData={eachData} />
            </div>
          </>

        ))}
      </div>
    </div>
  );
};

export default BlogPage;
