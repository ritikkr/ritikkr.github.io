import React, { Component } from "react";
import "./CSS/About.css";
// import AboutSvg from "./static/PcMan.svg";
import { ReactComponent as AboutSvg } from "./static/PcMan.svg";
const About = () => {
  return (
    <div className="Aboutcontainer">
      <div className="main-heading">
        <p class="About-title">Who AM I</p>
        <p class="About-lit-intro">
          | Final Year CSE Undergrad | Python Developer | SQL | Machine Learning
          | Web-Dev |
        </p>
      </div>
      <div className="About-container">
        <div className="Introduction-div">
          <p className="Introduction">
            I am Ritik Kumar, Final Year CSE Students. I like to play with
            technologies.<br></br>
            I'm from Delhi. I'm currently pursuing B.Tech in Computer Science
            and Technologies <br /> at Lovely Professional University. I've
            Completed my secondary and higher secondary education from CBSE Delhi.
            <br />
          </p>
        </div>
        <div className="svgContainer">
          <AboutSvg className="Aboutsvg" />
        </div>
      </div>
    </div>
  );
};

export default About;
