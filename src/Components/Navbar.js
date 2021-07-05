import React, { Component } from "react";
import "./CSS/Nav.css";
import About from "./About";
import Body from "./Body";
import Projects from "./Projects";
import Contact from "./Contact.js"

class Navbar extends Component {
  state = { 
    render: 'home' 
  }
  constructor(){
    super();
    this.handleMenuEvent.bind(this);
  }
  handleMenuEvent(event, menu){
    console.log(menu);
    this.setState({render:menu});
  }
  renderSubComp(){
    switch(this.state.render){
      case 'home': return <Body />
      case 'about': return <About />
      case 'projects': return <Projects />
      case 'contact': return <Contact />
    }
  }
  render() { 
    return (
    <div className="container">
      <div className="header-container">
        <div className="logo-div">
          <p id="nameLogo">Ritik Kr.</p>
        </div>
        <div className="menu-div">
          <ul id="menu-list">
            <li>
              <a onClick={()=>this.handleMenuEvent(this, 'home')}>Home</a>
            </li>
            <li>
              <a onClick={()=>this.handleMenuEvent(this, 'about')} >About</a>
            </li>
            <li>
              <a onClick={()=>this.handleMenuEvent(this, 'projects')} >Projects</a>
            </li>
            <li>
              <a onClick={()=>this.handleMenuEvent(this, 'contact')}>Contact</a>
            </li>
           
          </ul>
        </div>
      </div>
      {this.renderSubComp()}
    </div>
  
  );
  }
}
 

export default Navbar;
