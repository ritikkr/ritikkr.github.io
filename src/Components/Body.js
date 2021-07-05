import React, { Component } from "react";
import { ReactComponent as Icon } from "./LandingImage.svg";
import githubIcon from "./Icons/icons8-github.gif";
import linkedinIcon from "./Icons/icons8-linkedin-circled.gif";
import twitterIcon from "./Icons/icons8-twitter-circled.gif";
import stackOverflowIcon from "./Icons/icons8-stack-overflow.svg";
import mailIcon from "./Icons/icons8-secured-letter.gif";
import resumeIcon from './Icons/resume.png'
import "./Body.css";
import "./CSS/homeSvg.css";
const Body = () => {
  return (
    <div className="body-container">
      <div className="about-left-container">
        <span id="handGesture">👋</span>
        <p id="myName">Hello, My Name is Ritik</p>
        <p id="litIntro"> ➤ 👨‍💻 I'm Web and Software Developer from India</p>
        <span id="flag">🇮🇳</span>
        <br></br>
        <a href="" id="Resume">
          Resume <img src={resumeIcon} alt="" className="resumeImg" />
        </a>
        <div className="social-icons">
          <ul>
            <li>
              <a href="">
                <img src={githubIcon} alt="" height="45px" width="45x" />
              </a>
            </li>
            
            <li>
              <a href="">
                <img src={linkedinIcon} alt="" height="45px" width="45x" />
              </a>
            </li>
            
            <li>
              <a href="">
                <img src={twitterIcon} alt="" height="45px" width="45x" />
              </a>
            </li>
            
            <li>
              <a href="">
                <img src={stackOverflowIcon} alt="" height="45px" width="45x" />
              </a>
            </li>
            
            <li>
              <a href="">
                <img src={mailIcon} alt="" height="45px" width="45x" />
              </a>
            </li>
            
          </ul>
        </div>
      </div>
      <div className="svg-right-container">
        <Icon className="svgImg" />
      </div>
    </div>
  );
};

export default Body;
