import React, { useEffect, useState } from "react";
import BlogCard from "../blogCard";
import Axios from "axios";
import { MoonLoader } from "react-spinners";

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
        {blogData.map((eachData) => (
          <BlogCard blogData={eachData} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
