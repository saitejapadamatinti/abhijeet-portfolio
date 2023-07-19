// import React, { useState } from "react";
// import "./index.css";
// import { useForm } from "react-hook-form";
// import axios from "axios";

// const BlogBaackendForm = () => {
//   let [value, setValue] = useState("");
//   let handleInputChange = (e) => {
//     let inputValue = e.target.value;
//     setValue(inputValue);
//   };

//   console.log(value)

//   const [blogData, setBlogaData] = useState([]);
//   console.log(blogData);
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     const url = "http://localhost:3005/addProject";
//     axios.post(url, data).then((res) => setBlogaData(res.data));
//   };

//   return (
//     <div className="admin-backend-blog-div">
//       <form className="admin-backend-form-div" onSubmit={handleSubmit(onSubmit)}>
//         <input placeholder="heading" {...register("bloghead")} />
//         <input placeholder="card para" {...register("blogContent")} />
//         <input placeholder="image url" {...register("blogImage")} />
//         <input placeholder="likes" {...register("likes")} />
//         <textarea placeholder="description" {...register("blogLongDescription")} />
//         <input
//           type="date"
//           {...register("blogDate", {
//             valueAsDate: true,
//           })}
//         />
//         <input type="submit" />
//         <textarea onChange={handleInputChange}></textarea>

//       </form>
//     </div>
//   );
// };

// export default BlogBaackendForm;

import "./index.css";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://projects-4kv4.onrender.com";



function BlogBaackendForm() {
  // api data state
  const [fetchedData, setFetchedData] = useState([]);
  console.log(fetchedData)

  // inputs states
  const [_id, setId] = useState("");
  const [heading, setHeading] = useState("");
  const [displayImage, setDisplayImage] = useState("");
  const [descrption, setDescrption] = useState("");
  const [readMore, setReadMore] = useState("");
  const [date, setDate] = useState("");
  const [blogLongDescription, setBlogLongDescriptio] = useState("")

  console.log(heading, displayImage, descrption, readMore, date)


  // is editing state
  const [isEditing, setIsEditing] = useState(false);

  // login details
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogined, setIslogined] = useState(true);

  // fetch data from api
  const fetchingDataFromApi = async () => {
    const response = await fetch(
      "http://localhost:3005/allBlogs"
    );
    const data = await response.json();
    setFetchedData(data);
  };

  useEffect(() => {
    fetchingDataFromApi();
  }, []);

  // on submit fetching data
  const onSubmitHandler = (e) => {
    console.log("sss")
    e.preventDefault();
    const url = "http://localhost:3005/addProject";
    axios
      .post(url, {
        bloghead: heading,
        blogImage: displayImage,
        blogContent: descrption,
        readTime: readMore,
        blogDate: date,
        blogLongDescription: blogLongDescription
      })
      .then((res) => setFetchedData(res.data));

    // setHeading("");
    // setDisplayImage("");
    // setDescrption("");
    // setReadMore("");
    // setDate("");
    // setBlogLongDescriptio("")
  };

  // on delete
  const onDeleteHandler = (id) => {
    axios
      .delete(`http://localhost:3005/deleteProject/${id}`)
      .then((res) => setFetchedData(res.data));
  };

  // on edit handler
  const onEditHandler = (id) => {
    setIsEditing(true);
    const editingProject = fetchedData.find((eachItem) => id === eachItem._id);
    setId(editingProject._id);
    setHeading(editingProject.bloghead);
    setDisplayImage(editingProject.blogImage);
    setDescrption(editingProject.blogContent);
    setBlogLongDescriptio(editingProject.blogDate)
    setReadMore(editingProject.readTime);
    setDate(editingProject.blogLongDescription);
  };

  // on edit submit form
  const onEditSubmitHandler = () => {
    console.log("is Edited");
    const url = `http://localhost:3005/updateProject`;
    axios
      .put(url, {
        _id,
        bloghead: heading,
        blogImage: displayImage,
        blogContent: descrption,
        readTime: readMore,
        blogDate: date,
        blogLongDescription: blogLongDescription
      })
      .then((res) => setFetchedData(res.data));
    setIsEditing(false);
    setHeading("");
    setDisplayImage("");
    setDescrption("");
    setReadMore("");
    setDate("");
    setBlogLongDescriptio("")
  };

  // on login form
  const onLoginHandler = (e) => {
    e.preventDefault();
    if (userName === "saiteja" && password === "padamatinti") {
      setIslogined(true);
      setUserName("");
      setPassword("");
    } else {
      alert("username and password not matched");
    }
  };

  // onlogout form
  const onLogoutHandler = () => {
    setIslogined(false);
  };

  if (isLogined === false) {
    return (
      <div className="backend-login-form-main-div">
        <h2>Owner Login Form</h2>
        <form className="backend-login-form" onSubmit={onLoginHandler}>
          <div>
            <label>User Name</label>

            <input
              className="backend-input-box"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              className="backend-input-box"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div>
            <button className="blue-button" type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="BackendForm">
        <>
          <form onSubmit={onSubmitHandler}>
            <div className="form-div">
              <div>
                <label>Heading</label>
                <input
                  className="backend-input-box"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                  type="text"
                />
              </div>
              <div>
                <label>Image url</label>
                <input
                  className="backend-input-box"
                  value={displayImage}
                  placeholder="Please provide url"
                  onChange={(e) => setDisplayImage(e.target.value)}
                  type="text"
                />
              </div>
              <div>
                <label>Read time</label>
                <input
                  className="backend-input-box"
                  value={readMore}
                  onChange={(e) => setReadMore(e.target.value)}
                  type="text"
                />
              </div>
              <div>
                <label>Date</label>
                <input onChange={(e) => setDate(e.target.value)}
                  type="date"
                />
              </div>
            </div>
            <div className="backend-project-description-class">
              <label>Description</label>
              <textarea
                value={descrption}
                onChange={(e) => setDescrption(e.target.value)}
                className="text-area-input"
              >
                {descrption}
              </textarea>
            </div>
            <div className="backend-project-description-class">
              <label>Long Description</label>
              <textarea
                value={blogLongDescription}
                onChange={(e) => setBlogLongDescriptio(e.target.value)}
                className="text-area-input"
              >
                {blogLongDescription}
              </textarea>
            </div>
            <div className="backend-from-buttons-div">
              {isEditing === false ? (
                <button className="blue-button" type="submit">
                  Submit
                </button>
              ) : (
                <button className="green-button" onClick={onEditSubmitHandler}>
                  Edit
                </button>
              )}
              <button className="blue-button" onClick={onLogoutHandler}>
                Logout
              </button>
            </div>
          </form>

          <hr className="backend-hr-line" />
          <div>
            {fetchedData.map((each) => (
              <>
                <div className="main-data-div">
                  <span>
                    <b>Blog Heading</b> : {each.bloghead}
                  </span>
                  <span>
                    <b>Blog Date</b> : {each.blogDate}
                  </span>
                  <span>
                    <b>Display Image</b> : {each.blogImage}
                  </span>
                  <span>
                    <b>Read TIme</b> : {each.readTime}
                  </span>
                  <span>
                    <b>Blog Content</b> : {each.blogContent}
                  </span>
                  <span>
                    <b>Blog Long Description</b> : {each.blogLongDescription}
                  </span>


                  <div className="backend-results-button-div">
                    <button
                      className="backend-red-button"
                      onClick={() => onDeleteHandler(each._id)}
                    >
                      delete
                    </button>
                    <button
                      className="green-button"
                      onClick={() => onEditHandler(each._id)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      </div>
    );
  }
}

export default BlogBaackendForm;
