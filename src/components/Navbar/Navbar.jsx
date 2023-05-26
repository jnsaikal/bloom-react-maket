import React from "react";

import "./Navbar.css";
import img from "../imgs/Frame.png";

const Navbar = () => {
  return (
    <div className="navbar">
  
      <ol>
        <li className="image__frame"><img src="{img}" alt="" /></li>
        <li className="navbar__text">Grow your career</li>
        <li className="navbar__text">Build a team</li>
        <li className="navbar__text">Meet the founders</li>
        <li className="navbar__text">Mentorship</li>
        <li className="navbar__text">Say hello</li>
      </ol>
    </div>
  );
};
export default Navbar;
