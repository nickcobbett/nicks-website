import React, { Component } from 'react';
import './Home.css';
import classNames from 'classnames';
import {Grid} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Home extends Component {

  render() {
    let buttonClasses = {
      resume: classNames(
        'button',
        'resume',
      ),
      projects: classNames(
        'button',
        'projects',
      ),
      contact: classNames(
        'button',
        'contact',
      )
    }

    return (
      <div>
        <Grid>
          <div className="Home">
            <div className="Home-image-wide">
            <img src={require('./assets/profpic-small.jpg')} alt="profile pic" />
            </div>
            <div className="Home-about">
              <div className="Home-about-header">Hello,
                <div className="Home-about-subheader">a bit about me:</div>
              </div>
              <div className="Home-about-buttons">
                <LinkContainer className={buttonClasses.resume} to="/resume">
                  <div>My Resume</div>
                </LinkContainer>
                <LinkContainer className={buttonClasses.projects} to="/projects">
                  <div>Portfolio</div>
                </LinkContainer>
                <LinkContainer className={buttonClasses.contact} to="/contact">
                  <div>Contact</div>
                </LinkContainer>
              </div>
              <div className="Home-image-small">
                <img src={require('./assets/profpic-small.jpg')} alt="profile pic" />
              </div>
              <div className="Home-about-summary">I'm a full stack engineer based in Oakland, CA. Lately I've been enjoying working with React and React-Native. Take a look at some of the projects I've worked on and please say hello!
              </div>
            </div>
          </div>
        </Grid>
      </div>
    )
  }
}

export default Home;