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
            <div>You know the Seattle Seven? That was me... and six other guys</div>
          </div>
        </Grid>
      </div>
    )
  }
}

export default Resume;