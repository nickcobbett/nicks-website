import React, { Component } from 'react';
import {Grid, Carousel} from 'react-bootstrap';
import './Projects.css';


class Projects extends Component {

  render() {
    return (
      <Grid>
        <div className="Projects">
          <div className="header">Projects</div>
          <div className="line"></div>
        </div>
          <Carousel>
            <Carousel.Item>
              <img alt="900x500" src={require("./assets/race-with-friends.png")}/>
              <Carousel.Caption>
                <h3>Race With Friends</h3>
                <p>An IOS app that lets friends across the world to race against each other in real time or with recorded challenges. The social and gaming aspect of the app aims to help motivate users to exercise.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="900x500" src={require("./assets/filmedin.png")}/>
              <Carousel.Caption>
                <h3>FilmedIn</h3>
                <p>A social network for film buffs</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      </Grid>
    );
  }
}

export default Projects;