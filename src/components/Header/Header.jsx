import React from "react";
import "./Header.css";

import img1 from "../imgs/IMAGE (1).png";
import img2 from "../imgs/IMAGE (2).png";
import logo1 from "../imgs/logo1.png"
import logo2 from "../imgs/logo2.png"
import logo3 from "../imgs/logo3.png"
import logo4 from "../imgs/logo4.png"
import logo5 from "../imgs/logo5.png"
import logo6 from "../imgs/logo6.png"



const Header = () => {
    return (
        <div className="header">
        <h1>Discover, nurture, bloom</h1>
        <p>Product & Engineering Recruitment <br />
            va va bloom, with a human touch and a dash of</p>


        <img className="img1" src="{img1}" alt="" />
        <img className="img2" src="{img2}" alt="" />

        <div className="logos">
          <ol className="logos__list">
            <li><img src="{logo1}" alt="" className="logo1" /></li>
            <li><img src="{logo2}" alt="" className="logo2" /></li>
            <li><img src="{logo3}" alt="" className="logo3" /></li>
            <li><img src="{logo4}" alt="" className="logo4" /></li>
            <li><img src="{logo5}" alt="" className="logo5" /></li>
            <li><img src="{logo6}" alt="" className="logo6" /></li>
          </ol>
        </div>
      </div>
    );
  };
  export default Header;