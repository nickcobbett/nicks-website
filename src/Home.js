import React, { Component } from 'react';
import './Home.css';
import classNames from 'classnames';
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
      <div className="Home">
        <div className="Home-image-wide">
        <img src={require('./profpic-small.jpg')} alt="profile pic" />
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
            <img src={require('./profpic-small.jpg')} alt="profile pic" />
          </div>
          <div className="Home-about-summary">Here's some words about how I'm a self starter, motivated by highly performant technologies, looking for a team that can both challenge and elevate me to the highest level. Sports metaphors are good. War metaphors are better. Actually most sports metaphors are war metaphors. We speak of wounded teammates and putting the team on our back, and going to battle for what matters, in the trenches...
          </div>
        </div>
      </div>
    )
  }
}

export default Home;