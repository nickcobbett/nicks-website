import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import Resume from './Resume.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import classNames from 'classnames';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: {
        home: true
      }
    };
    this.handleNavItemClick = this.handleNavItemClick.bind(this);
  }

  handleNavItemClick(e) {
    let location = e.target.classList[1];
    this.setState({
      currentPage: {
        [`${location}`]: true
      }
    });
  }

  componentDidMount() {
    // console.log(this.state)
  }

  render() {

    let navItemClasses = {
      home: classNames(
        'NavItem',
        'home',
        {currentPage: this.state.currentPage.home}
      ),
      resume: classNames(
        'NavItem',
        'resume',
        {currentPage: this.state.currentPage.resume}
      ),
      projects: classNames(
        'NavItem',
        'projects',
        {currentPage: this.state.currentPage.projects}
      ),
      contact: classNames(
        'NavItem',
        'contact',
        {currentPage: this.state.currentPage.contact}
      )
    }


    return (
      <div className="App">
        <div className="App-header">
          <div className="name-title">
            <div className="name">Nick Cobbett</div>
            <div className="title">Failed Musician/Unemployed</div>
          </div>
          <div className="App-Navbar">
            <div className={navItemClasses.home} onClick={this.handleNavItemClick}>Home</div>
            <div className={navItemClasses.resume} onClick={this.handleNavItemClick}>Resume</div>
            <div className={navItemClasses.projects} onClick={this.handleNavItemClick}>Projects</div>
            <div className={navItemClasses.contact} onClick={this.handleNavItemClick}>Contact</div>
          </div>
        </div>
        {
          this.state.currentPage.home ? <Home className="Home"/> :
          this.state.currentPage.resume ? <Resume className="Resume"/> :
          this.state.currentPage.projects ? <Projects className="Projects" /> :
          this.state.currentPage.contact ? <Contact className="Contact" /> : null
        }

      </div>
    );
  }
}

export default App;