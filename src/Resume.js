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
            <div>resume coming soon!</div>
          </div>
        </Grid>
      </div>
    )
  }
}

export default Resume;