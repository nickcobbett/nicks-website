import React, { Component } from 'react';
import './Home.css';
import classNames from 'classnames';
// import PropTypes from 'prop-types';

class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }

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
        <div className="Home-image">
          <img src={require('./profpic.jpg')} alt="profile pic" />
        </div>
        <div className="Home-about">
          <div className="Home-about-header">Hello,
            <div className="Home-about-subheader">a bit about me</div>
          </div>
          <div className="Home-about-buttons">
            <div className={buttonClasses.resume} onClick={this.props.handleButtonClick}>My Resume</div>
            <div className={buttonClasses.projects} onClick={this.props.handleButtonClick}>Portfolio</div>
            <div className={buttonClasses.contact} onClick={this.props.handleButtonClick}>Contact</div>
          </div>
          <div className="Home-about-summary">Here's some words about how I'm a self starter, motivated by highly performant technologies, looking for a team that can both challenge and elevate me to the highest level. Sports metaphors are good. War metaphors are better. Actually most sports metaphors are war metaphors. We speak of wounded teammates and putting the team on our back, and going to battle for what matters, in the trenches...
          </div>
        </div>
      </div>
    )
  }
}

export default Home;