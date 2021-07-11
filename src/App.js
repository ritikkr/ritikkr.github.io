import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from "./Components/About.js";
import Body from "./Components/Body";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact.js"
class App extends Component {
  state = { 
    render: 'home' 
  }
  constructor(){
    super();
    this.handleMenuEvent.bind(this);
    this.handleMenuEvent = this.handleMenuEvent.bind(this);
  }
  
  handleMenuEvent(menu){
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
    <>
    <div>
    <Navbar handleMenuEvent={this.handleMenuEvent} />
    </div>
    </>
  );
  }
}
 
export default App;
