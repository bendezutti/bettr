import React from "react";
import { Link } from "react-router-dom";
import baseballImg from "./NavBarImages/baseball.png";
import "./NavBar.css";

const NavBar = () => {
  return (
  
    <div> 
    <Link to="/baseball">
      <button className="buttons">
        <img src={baseballImg} alt="baseball" />
      </button>
    </Link>
    </div>
  );
};

export default NavBar;
