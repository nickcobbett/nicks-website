import React, { Component } from 'react';
import {Grid, Carousel, Image} from 'react-bootstrap';
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
          <Carousel>
            <Carousel.Item>
              <Image width={900} height={500} alt="900x500" src="../assets/race-with-friends.png"/>
              <Carousel.Caption>
                <h3>Race With Friends</h3>
                <p>An IOS app that lets friends across the world to race against each other in real time or with recorded challenges. The social and gaming aspect of the app aims to help motivate users to exercise.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      </Grid>
    );
  }
}

export default Projects;