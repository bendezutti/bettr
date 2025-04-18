import React from "react";
import { Link } from "react-router-dom";
import baseballImg from "./NavBarImages/baseball.png";
import "./NavBar.css";

const NavBar = () => {
  return (

    <div className="background"> 
    <h2> Bettr </h2>
    <Link to="/">
      <button className="buttons">
        <img src={baseballImg} alt="baseball" />
        
      </button>
    </Link>
    </div>
  );
};

export default NavBar;
