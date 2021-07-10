import React, { Component } from "react";
import "./CSS/About.css";
import AboutGif from "./Icons/anime2.gif";
import clang from './Icons/c-programming.png';
import python from './Icons/python.svg';
import java from './Icons/java.svg';
import django from './Icons/django.svg';
import html from './Icons/html-5.svg';
import github from './Icons/githubSkill.svg';
import cpp from './Icons/c++.svg'
import js from './Icons/javascript.svg';
import css from './Icons/css3.svg';
import reactIcon from './Icons/react-native.svg';
import scalaIcon from './Icons/scala.png';
import vsIcon from './Icons/visual-studio.png'
import sqlIcon from './Icons/database.png'
import ai from './Icons/brain.png'
const About = () => {
  return (
    <div className="Aboutcontainer">
      <div className="main-heading">
        <p class="About-title About-title-font">Who AM I</p>
        <p class="About-lit-intro">
          | Final Year CSE Undergrad | Python Developer | SQL | Machine Learning
          | Web-Dev |
        </p>
      </div>
      <div className="About-container">
        <div className="Introduction-div">
          <p className="Introduction">
          <h5 className="About-title-font">About</h5>
            I am Ritik Kumar, Final Year CSE Students. I like to play with
            technologies.<br></br>
            I'm from Delhi. I'm currently pursuing B.Tech in Computer Science
            and Technologies <br /> at Lovely Professional University. I've
            Completed my secondary and higher secondary education from CBSE
            Delhi.
            <br />
          </p>
          <div className="skills-container">
            <h3 className="About-title-font">Skills <br /> </h3>
            <div className="skills-set">
               
            <div className="language-stack">
            <ul>
                <p className="skill-subtitle">Programming Languages</p>
                    <li>
                        <img src={clang} alt="" class="aboutIcon" />
                    </li>
                    <li>
                        <img src={cpp}alt="" class="aboutIcon" />
                    </li>     
                    <li>
                        <img src={java} alt="" class="aboutIcon" />
                    </li>
                    <li>
                        <img src={python} alt="" class="aboutIcon" />
                    </li>                         
                    <li>
                        <img src={js}alt="" class="aboutIcon" />
                    </li>         
                    <li>
                        <img src={sqlIcon}alt="" height="40px" width="40px" class="icon-m" class="aboutIcon" />
                    </li>     
                   
                </ul>
            </div>
            <div className="tech-stack">
                <ul>
                <p className="skill-subtitle">Technology</p>
                    <li>
                        <img src={github} alt="" class="aboutIcon" />
                    </li>
                    <li>
                        <img src={vsIcon} alt="" height="40px" width="40px"  class="aboutIcon"/>
                    </li> 
                </ul>
            </div>
            <div className="framework-stack">
            <ul>
                <p className="skill-subtitle">Frameworks</p>
                    <li>
                        <img src={django} alt="" class="aboutIcon" />
                    </li>
                    <li>
                        <img src={reactIcon} alt="" class="aboutIcon" />
                    </li>
                </ul>
                
            </div>
            <div className="others-stack">
            <ul>
                <p className="skill-subtitle">Others</p>
                    <li>
                        <img src={html} alt="" class="aboutIcon" />
                    </li>
                    <li>
                        <img src={css} alt="" class="aboutIcon" />
                    </li>
                    <li>
                        <img src={ai} alt="" class="aboutIcon" height="40px" width="40px" class="icon-m" />
                    </li>
                </ul>
                
            </div>
            </div>
          </div>
        </div>
        <div className="svgContainer">
          <img src={AboutGif} alt="" id="AboutImg" />
        </div>
      </div>
    </div>
  );
};

export default About;
