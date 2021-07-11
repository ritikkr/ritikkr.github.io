import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends Component {
  state = {  }
  render() { 
    return (
    <>
    <div>
    <div>
    <Navbar />
    </div>
    
    </div>
    </>
  );
  }
}
 
export default App;
