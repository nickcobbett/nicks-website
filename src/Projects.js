import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <Grid>
        <div className="Projects">
          <div className="header">Projects</div>
          <div className="line"></div>
          <div>projects coming soon!</div>
        </div>
      </Grid>
    );
  }
}

export default Projects;