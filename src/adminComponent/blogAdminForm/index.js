import React, { useState } from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const BlogBaackendForm = () => {
  let [value, setValue] = useState("");
  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  console.log(value)

  const [blogData, setBlogaData] = useState([]);
  console.log(blogData);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const url = "http://localhost:3005/addProject";
    axios.post(url, data).then((res) => setBlogaData(res.data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="heading" {...register("bloghead")} />
        <input placeholder="card para" {...register("blogContent")} />
        <input placeholder="image url" {...register("blogImage")} />
        <input placeholder="likes" {...register("likes")} />
        <textarea placeholder="description" {...register("blogLongDescription")} />
        <input
          type="date"
          {...register("blogDate", {
            valueAsDate: true,
          })}
        />
        <input type="submit" />
        <textarea onChange={handleInputChange}></textarea>
        
      </form>
    </div>
  );
};

export default BlogBaackendForm;
