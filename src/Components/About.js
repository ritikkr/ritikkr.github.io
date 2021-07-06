import React, { Component } from "react";
import "./CSS/About.css";
import AboutGif from "./Icons/anime.gif";
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
                        <img src={clang} alt="" />
                    </li>
                    <li>
                        <img src={cpp}alt="" />
                    </li>     
                    <li>
                        <img src={java} alt="" />
                    </li>
                    <li>
                        <img src={python} alt="" />
                    </li>                         
                    <li>
                        <img src={js}alt="" />
                    </li>     
                    <li>
                        <img src={scalaIcon}alt="" height="40px" width="40px"/>
                    </li>     
                    <li>
                        <img src={sqlIcon}alt="" height="40px" width="40px" class="icon-m" />
                    </li>     
                   
                </ul>
            </div>
            <div className="tech-stack">
                <p className="skill-subtitle">Technology</p>
                <ul>
                    <li>
                        <img src={github} alt="" />
                    </li>
                    <li>
                        <img src={vsIcon} alt="" height="40px" width="40px" />
                    </li> 
                </ul>
            </div>
            <div className="framework-stack">
                <p className="skill-subtitle">Frameworks</p>
            <ul>
                    <li>
                        <img src={django} alt="" />
                    </li>
                    <li>
                        <img src={reactIcon} alt="" />
                    </li>
                </ul>
                
            </div>
            <div className="others-stack">
                <p className="skill-subtitle">Others</p>
            <ul>
                    <li>
                        <img src={html} alt="" />
                    </li>
                    <li>
                        <img src={css} alt="" />
                    </li>
                    <li>
                        <img src={ai} alt="" height="40px" width="40px" class="icon-m" />
                    </li>
                </ul>
                
            </div>
            </div>
          </div>
        </div>
        <div className="svgContainer">
          <img src={AboutGif} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
