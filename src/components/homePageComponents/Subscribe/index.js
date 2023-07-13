import React, { useState } from "react";
import "./index.css";
import { IoMdSend } from "react-icons/io";
import { safePreventDefault } from "react-slick/lib/utils/innerSliderUtils";
import axios from "axios";

const SubscribeSection = (e) => {
  const [inputEmail, setInputEmail] = useState("");
  const handlerSendButton = (e) => {
    e.preventDefault();
    const data = {
      userEmail: inputEmail,
      date: new Date(),
    };
    const url = "http://localhost:3005/subscribedEmails";
    axios.post(url, data).then((res) => console.log(res));
    setInputEmail("");
  };
  return (
    <div id="Blogs" className="main-width-container">
      <div className="middle-width-container">
        <div>
          <div className="subscribe-card-background-image-div">
            <h1>Subscribe to Newsletter</h1>
            <p>
              The best way to add a touch of awesomeness to your inbox.
              Guaranteed.
            </p>
            <form
              onSubmit={(e) => handlerSendButton(e)}
              className="subscribe-input-class-div"
            >
              <input
                value={inputEmail}
                type="email"
                onChange={(e) => setInputEmail(e.target.value)}
                placeholder="Enter Email"
                className="subscribe-input-class"
              />
              <button type="submit">
                <IoMdSend className="subscribe-input-send-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
