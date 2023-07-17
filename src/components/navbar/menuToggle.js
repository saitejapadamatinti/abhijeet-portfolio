import React from "react";
import "./styles.css";

const Path = (props) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="var(--background)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (

  < button className="mobile-menu-button" onClick={toggle} >
    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
      <path d="M5.32812 23.7344H25.6719M5.32812 15.9844H25.6719M5.32812 8.23438H25.6719" stroke="#5F4D8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </ button>
);
