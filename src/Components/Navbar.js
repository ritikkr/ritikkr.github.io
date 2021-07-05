import React, { Component } from "react";
import "./Nav.css";
import menuIcon from "./Icons/icons8-menu.svg"
const intro = () => {
    let myIntro = ["Machine Learning", "Web Development", ""]
}
const Navbar = () => {
  return (
    <div className="container">
      <div className="header-container">
        <div className="logo-div">
          <p id="nameLogo">Ritik Kr.</p>
        </div>
        <div className="menu-div">
          <ul id="menu-list">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  
  );
};

export default Navbar;
