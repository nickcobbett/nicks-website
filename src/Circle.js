import React, { Component } from 'react';
import './Circle.css';

class Circle extends Component {
  render() {
    return (
      <div className="Circle">
        <svg height="100" width="100">
          <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
        </svg>
      </div>
    )
  }
}

export default Circle;