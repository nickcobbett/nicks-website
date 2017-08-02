import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="name-title">
            <div className="name">Nick Cobbett</div>
            <div className="title">Failed Musician/Unemployed</div>
          </div>
          <div className="App-Navbar">
            <div className="NavItem-Home">Home</div>
            <div className="NavItem-Resume">Resume</div>
            <div className="NavItem-Projects">Projects</div>
            <div className="NavItem-Contact">Contact</div>
          </div>
        </div>
        <Home className="Home"/>
      </div>
    );
  }
}

export default App;


{/**/}