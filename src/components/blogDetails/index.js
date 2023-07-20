import React, { useEffect, useState } from "react";
import "./index.css";
import BlogCard from "../blogCard";
import HorizentaLineWithDate from "../horizentalLinesWIthDate";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import { MoonLoader } from "react-spinners";
import HomeBlogCard from '../homePageComponents/HomeBlogs/homeBlogCard'


const projectUrl = "http://localhost:3005/allBlogs";

const BlogDetails = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [blogDetails, setBlogDetails] = useState([]);
  const [blogDescription, setBlogDescription] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const { id } = params;

  const getBlogDetailsFromApi = async () => {
    setIsLoading(true);
    const url = `http://localhost:3005/allBlogs/${id}`;
    const data = await Axios(url);
    setBlogDetails(data.data);
    const splitedDescription = data.data.blogLongDescription.split("/");
    setBlogDescription(splitedDescription);
    setIsLoading(false);
  };

  useEffect(() => {
    getBlogDetailsFromApi();
  }, [id]);

  const getProjectDataFromApi = async () => {
    const data = await Axios(projectUrl);
    const soretedData = data.data.sort(
      (objA, objB) =>
        Number(new Date(objB.blogDate)) - Number(new Date(objA.blogDate))
    );
    setRecentBlogs(soretedData.splice(0, 3));
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
        <div>
          <div className="blog-details-width-less-main">
            <div className="blog-details-width-less">
              <div className="blog-details-main-head-container">
                <h1 className="blog-details-main-head-banner">Blogs</h1>
              </div>
              <h1 className="main-head">{blogDetails.bloghead}</h1>
              <HorizentaLineWithDate
                blogDate={blogDetails.blogDate}
                likes={blogDetails.likes}
              />
              <div className="blog-details-image-div">
                <img
                  alt="blog-details-imag"
                  className="blog-details-image"
                  src={blogDetails.blogImage}
                />
              </div>
              <br />
              <br />
              <div className="blog-details-big-para-div">
                {blogDescription.map((each) => (
                  <p className="secondary-para"> {each} </p>
                ))}
              </div>
            </div>
          </div>

          <HorizentaLineWithDate
            blogDate={blogDetails.blogDate}
            likes={blogDetails.likes}
          />
          <div>
            {recentBlogs.map((eachData) => (

              <>
                <div className="desktop-blog-cards">
                  <BlogCard key={eachData.id} blogData={eachData} />
                </div>
                <div className="mobole-blog-card">
                  <HomeBlogCard key={eachData.id} blogData={eachData} />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
