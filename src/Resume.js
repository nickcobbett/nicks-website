import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import './Resume.css';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <div className="Resume">
            <div className="header">Resume</div>
            <div className="line"></div>
            <div>Please send me an email for a copy of my latest resume, or just have a look at some of my projects!</div>
          </div>
        </Grid>
      </div>
    )
  }
}

export default Resume;