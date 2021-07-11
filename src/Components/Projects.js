import React, { Component } from "react";
import "./CSS/Project.css";
import portfolioImg from "./static/projectImage/portfolio3.png";
import covid19india from "./static/projectImage/covid.jpg";
import rejango from "./static/projectImage/rejango.svg";
class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="project-container">
        <div className="project-header-container">
          <h3 className="project-head">My Projects in Shorts</h3>
        </div>
        <div className="project-cards-container">
          <div className="project-card">
            <div className="img-container">
              <img src={portfolioImg} alt="" className="project-card-img" />
            </div>
            <div className="description-container">
              <h2 class="project-card-head">Portfolio Website</h2>
              <p className="project-details">
                This is my portfolio website made with React Js using react-dom,
                react-router this is something that i have to solve
              </p>
            </div>
          </div>
          <div className="project-card">
            <div className="img-container">
              <img
                src={covid19india}
                alt=""
                className="project-card-img"
                id="covidImg"
              />
            </div>
            <div className="description-container">
              <h2 class="project-card-head">Covid19 India Tracker</h2>
              <p className="project-details">
                This is my covid19 tracker project made with react-js . In this
                particular project I used API to get realtime data for indian
                states only. In Future, there may be feature of getting every
                country report on my website.
              </p>
            </div>
          </div>
          <div className="project-card">
            <div className="img-container">
              <img src={rejango} alt="" className="project-card-img" />
            </div>
            <div className="description-container">
              <h2 class="project-card-head">Rejango Quoter</h2>
              <p className="project-details">
                In this Rejango Quoter project I used React-js for the frontend
                and Django in the backend. In this project i worked on model
                serializers and creating API in Django and from react fetching
                those data.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
