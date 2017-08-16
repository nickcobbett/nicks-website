import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import Resume from './Resume.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import classNames from 'classnames';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: {

      },
      activePage: 1
    };
    this.handleNavItemClick = this.handleNavItemClick.bind(this);
  }

  // handleNavItemClick(e) {
  //   let location = e.target.classList[1];
  //   this.setState({
  //     currentPage: {
  //       [`${location}`]: true
  //     }
  //   });
  // }

  handleNavItemClick(key) {
    this.setState({activePage: key});
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
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Todd Toddson</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav activeKey={this.state.activePage} pullRight onSelect={this.handleNavItemClick}>
              <NavItem eventKey={1} href="/home">Home</NavItem>
              <NavItem eventKey={2} href="/projects">Projects</NavItem>
              <NavItem eventKey={3} href="/resume">Resume</NavItem>
              <NavItem eventKey={4} href="/contact">Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}




    // return (
    //   <div className="App">
    //     <div className="App-header">
    //       <div className="name-title">
    //         <div className="name">Nick Cobbett</div>
    //         <div className="initials">NC</div>
    //         <div className="title">Failed Musician/ Software Engineer</div>
    //       </div>
    //       <div className="drawer">

    //         drawer
    //       </div>
    //       <div className="App-Navbar">
    //         <div className={navItemClasses.home} onClick={this.handleNavItemClick}>Home</div>
    //         <div className={navItemClasses.resume} onClick={this.handleNavItemClick}>Resume</div>
    //         <div className={navItemClasses.projects} onClick={this.handleNavItemClick}>Projects</div>
    //         <div className={navItemClasses.contact} onClick={this.handleNavItemClick}>Contact</div>
    //       </div>
    //     </div>
    //     {
    //       this.state.currentPage.home ? <Home className="Home" handleButtonClick={this.handleNavItemClick}/> :
    //       this.state.currentPage.resume ? <Resume className="Resume"/> :
    //       this.state.currentPage.projects ? <Projects className="Projects" /> :
    //       this.state.currentPage.contact ? <Contact className="Contact" /> : null
    //     }

    //   </div>
    // );




export default App;