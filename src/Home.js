import React, { Component } from 'react';
import './Home.css';
import Circle from './Circle.js';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-image">
          <img src={require('./profpic.jpg')} />
        </div>
        <div className="Home-about">
          <div className="Home-about-header">Hello,
            <div className="Home-about-subheader">a bit about me</div>
          </div>
          <div className="Home-about-buttons">
            <Circle props="resume" />
            <Circle props="portfolio" />
            <Circle props="skills" />
          </div>
          <div className="Home-about-summary">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story and let your users get to know you.
          </div>
        </div>
      </div>
    )
  }
}

export default Home;