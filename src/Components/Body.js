import React, { Component } from "react";
import { ReactComponent as Icon } from "./static/LandingImage.svg";
import githubIcon from "./Icons/icons8-github.gif";
import linkedinIcon from "./Icons/icons8-linkedin-circled.gif";
import twitterIcon from "./Icons/icons8-twitter-circled.gif";
import stackOverflowIcon from "./Icons/icons8-stack-overflow.svg";
import mailIcon from "./Icons/icons8-secured-letter.gif";
import resumeIcon from './Icons/resume.png'
import "./CSS/Body.css";
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
        <a href="https://drive.google.com/file/d/1twv3wkjyOo-LwMhra9Gx5u8ewRF9Ruz1/view?usp=sharing" id="Resume">
          Resume <img src={resumeIcon} alt="" className="resumeImg" />
        </a>
        <div className="social-icons">
          <ul>
            <li>
              <a href="https://github.com/ritikkr">
                <img src={githubIcon} alt="" height="45px" width="45x" />
              </a>
            </li>
            
            <li>
              <a href="https://www.linkedin.com/in/ritikkr/">
                <img src={linkedinIcon} alt="" height="45px" width="45x" />
              </a>
            </li>
            
            <li>
              <a href="https://twitter.com/ritikkr24">
                <img src={twitterIcon} alt="" height="45px" width="45x" />
              </a>
            </li>
            
            <li>
              <a href="https://stackoverflow.com/users/10554702/ritik-kumar">
                <img src={stackOverflowIcon} alt="" height="45px" width="45x" />
              </a>
            </li>
            
            <li>
              <a href="mailto:ritikkumar2405199@gmail.com">
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
