import React, {Component} from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavBar extends Component {
  render(){
    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Nick Cobbett</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav activeKey={1} pullRight >
              <LinkContainer to="/home">
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/projects">
                <NavItem eventKey={2}>Projects</NavItem>
              </LinkContainer>
              <LinkContainer to="/resume">
                <NavItem eventKey={3}>Resume</NavItem>
              </LinkContainer>
              <LinkContainer  to="/contact">
                <NavItem eventKey={4}>Contact</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;