import React, { useEffect, useState } from "react";
import "./index.css";

const UserEmailsAdmin = () => {
  const [userEmailData, setUserEMailData] = useState([]);
  console.log(userEmailData)

  //   const blogYear = new Date(blogData.blogDate).getFullYear();
  //   const blogDay = new Date(blogData.blogDate).getDate();
  //   const blogMonthnumber = new Date(blogData.blogDate).getMonth();

  //   function getMonthName(monthNumber) {
  //     const date = new Date();
  //     date.setMonth(monthNumber);
  //     return date.toLocaleString("en-US", { month: "short" });
  //   }

  //   const blogMonth = getMonthName(blogMonthnumber);

  useEffect(() => {
    const fetcingDataFromEMailAp = async () => {
      const response = await fetch("http://localhost:3005/subscribedEmails");
      const data = await response.json();
      //   const soretedData = data.data.sort(
      //     (objA, objB) =>
      //       Number(new Date(objB.blogDate)) - Number(new Date(objA.blogDate))
      //   );
      setUserEMailData(data.reverse());
    };
    fetcingDataFromEMailAp();
  }, []);
  return (
    <div className="admin-user-email-div">
      <div>
        {userEmailData.map((eachEmail) => (
          <>
            <p className="admi-user-emain-para">
              {eachEmail.userEmail} --- {eachEmail.date.slice(0,10)}
            </p>
          </>
        ))}
      </div>
    </div>
  );
};

export default UserEmailsAdmin;
