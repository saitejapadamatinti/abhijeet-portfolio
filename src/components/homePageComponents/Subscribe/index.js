import React, { useState } from "react";
import "./index.css";
import { IoMdSend } from "react-icons/io";
import { safePreventDefault } from "react-slick/lib/utils/innerSliderUtils";
import axios from "axios";

const base_url = process.env.REACT_APP_MY_VARIABLE;

const SubscribeSection = (e) => {
  const [inputEmail, setInputEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [emptySubmit, setEmptySubmit] = useState(false)



  const handlerSendButton = (e) => {
    e.preventDefault();
    if (inputEmail === ""){
      setEmptySubmit(true)
    }
    else{
      const data = {
        userEmail: inputEmail,
        date: new Date(),
      };
      const url = `${base_url}/subscribedEmails`;
      axios.post(url, data).then((res) => (res));
      setInputEmail("");
      setIsSubmitted(true)
    }
   
  };

  return (
    <div id="Blogs" className="main-width-container">
      <div className="middle-width-container">
        <div className="sebscribe-card-main-flex-div">
          <div className="subscribe-card-background-image-div">
          {isSubmitted === false ? 
          <>
            <h1>Subscribe to Newsletter</h1>
            <p>
              The best way to add a touch of awesomeness to your inbox.
              Guaranteed.
            </p>
            <form
              onSubmit={(e) => handlerSendButton(e)}
              className="subscribe-input-class-div shadow"
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
            <p className="subscribe-error-text">{emptySubmit ? "Please Submit your Email" :""  }</p>
            </>
          : <h1 className="thank-for-subscribg-text">You're all set! Thanks for subscribing</h1>}
           </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
