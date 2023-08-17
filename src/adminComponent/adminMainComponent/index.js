import React, { useState } from "react";
import "./index.css";
import BlogBaackendForm from "../blogAdminForm";
import UserEmailsAdmin from "../userEmailsAdmin";
import ResumePage from "../resumePage";
import UserContactData from "../userContactData";

const AdminMainComp = () => {
  const [activeTab, setActiveTab] = useState("blogs");

  // login details
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogined, setIslogined] = useState(true);

  const activeColor =
    activeTab === "blogs" ? "admin-tab admin-tab-active" : "admin-tab";
  const activeColorResume =
    activeTab === "emails" ? "admin-tab admin-tab-active" : "admin-tab";
  const activeColoraddResume =
    activeTab === "addResume" ? "admin-tab admin-tab-active" : "admin-tab";
  const activeUserContactData =
    activeTab === "userContact" ? "admin-tab admin-tab-active" : "admin-tab";

  // on login form
  const onLoginHandler = (e) => {
    e.preventDefault();
    if (userName === "abhijeet@242081" && password === "abhi030609") {
      setIslogined(false);
      setUserName("");
      setPassword("");
    } else {
      alert("username and password not matched");
    }
  };

  // onlogout form
  const onLogoutHandler = () => {
    setIslogined(true);
  };

  if (isLogined === true) {
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
      <>
        <div>
          <div className="admin-page-main-div">
            <div className="admin-page-tabs-div">
              <p className={activeColor} onClick={() => setActiveTab("blogs")}>
                Blogs Page
              </p>
              <p
                className={activeColorResume}
                onClick={() => setActiveTab("emails")}
              >
                Emails
              </p>
              <p
                className={activeColoraddResume}
                onClick={() => setActiveTab("addResume")}
              >
                add Resume
              </p>
              <p
                className={activeUserContactData}
                onClick={() => setActiveTab("userContact")}
              >
                User Contact
              </p>

              <button className="blue-button" onClick={onLogoutHandler}>
                Logout
              </button>
            </div>
          </div>

          <div>
            {activeTab === "blogs" && <BlogBaackendForm />}
            {activeTab === "emails" && <UserEmailsAdmin />}
            {activeTab === "addResume" && <ResumePage />}
            {activeTab === "userContact" && <UserContactData />}
          </div>
        </div>
      </>
    );
  }
};

export default AdminMainComp;
