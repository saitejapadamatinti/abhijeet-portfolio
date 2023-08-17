import React from "react";
import "./index.css";
import { useState } from "react";
import { useEffect } from "react";

const base_url = process.env.REACT_APP_MY_VARIABLE;

const UserContactData = () => {
  const [fetchedUserData, setFetchedUserdData] = useState([]);

  useEffect(() => {
    const fetchedUserDataFromApi = async () => {
      const url = `${base_url}/userContact`;
      const response = await fetch(url);
      const data = await response.json();
      setFetchedUserdData(data);
    };
    fetchedUserDataFromApi();
  }, []);

  return (
    <div className="user-contact-container">
      <div>
        {fetchedUserData.map((each) => (
          <div className="user-contact-card-div">
            <p>
              Name : {each.firstname} {each.lastname}
            </p>
            <p>Mobile : {each.mobile}</p>
            <p>Email : {each.email}</p>
            <p>Message : {each.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserContactData;
