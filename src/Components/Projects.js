import React, { Component } from 'react';       
import './CSS/Project.css'
import portfolioImg from './static/projectImage/portfolio2.png'
class Projects extends Component {
    state = {  }
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
                                This is my portfolio website made with React Js using react-dom, react-router
                            this is something that i have to solve
                            </p>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="img-container">
                        <img src={portfolioImg} alt="" className="project-card-img" />
                        </div>
                        <div className="description-container">
                            <h2 class="project-card-head">Portfolio Website</h2>
                            <p className="project-details">
                                This is my portfolio website made with React Js using react-dom, react-router
                            </p>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="img-container">
                        <img src={portfolioImg} alt="" className="project-card-img" />
                        </div>
                        <div className="description-container">
                            <h2 class="project-card-head">Portfolio Website</h2>
                            <p className="project-details">
                                This is my portfolio website made with React Js using react-dom, react-router
                            
                            </p>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="img-container">
                        <img src={portfolioImg} alt="" className="project-card-img" />
                        </div>
                        <div className="description-container">
                            <h2 class="project-card-head">Portfolio Website</h2>
                            <p className="project-details">
                                This is my portfolio website made with React Js using react-dom, react-router
                            </p>
                        </div>
                    </div>
                   
                  
                </div>

            </div>
         );
    }
}
 
export default Projects;