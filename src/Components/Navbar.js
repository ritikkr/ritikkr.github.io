import React, { Component } from "react";
import "./CSS/Nav.css";
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { Link } from "react-router-dom";
import About from "./About.js";
import Body from "./Body";
import Projects from "./Projects";
import Contact from "./Contact.js"

class Navbar extends Component {
  state = { }
  constructor(){
    super();
    this.handleMenuEvent.bind(this);
  }
  handleMenuEvent(event, menu){
    console.log(menu);
    this.props.handleMenuEvent(menu);
  }
  
  render() { 
    return (
    <div className="container">
    <BrowserRouter>

      <div className="header-container">
        <div className="logo-div">
          <p id="nameLogo">Ritik Kr.</p>
        </div>
        <div className="menu-div">
          <ul id="menu-list">
            <li>
              <Link to="/" onClick={()=>this.handleMenuEvent(this, 'home')} >Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={()=>this.handleMenuEvent(this, 'about')} >About</Link>
            </li>
            <li>
              <Link to="/projects" onClick={()=>this.handleMenuEvent(this, 'projects')} >Projects</Link>
            </li>
            <li>
              <Link to="/contact" onClick={()=>this.handleMenuEvent(this, 'contact')}>Contact</Link>
            </li>      
          </ul>
        </div>
      </div>
      <Switch>

      <Route path="/" exact component={Body} exact />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      </Switch>
    </BrowserRouter>
    </div>
  
  );
  }
}
 

export default Navbar;
