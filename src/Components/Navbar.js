import React, { Component } from "react";
import "./CSS/Nav.css";


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
      <div className="header-container">
        <div className="logo-div">
          <p id="nameLogo">Ritik Kr.</p>
        </div>
        <div className="menu-div">
          <ul id="menu-list">
            <li>
              <a onClick={()=>this.handleMenuEvent(this, 'home')} >Home</a>
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
      
    </div>
  
  );
  }
}
 

export default Navbar;
