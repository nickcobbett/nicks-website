import React, { Component } from 'react';
import './Contact.css';
import Mailto from 'react-mailto';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="header">Contact</div>
        <div className="line"></div>

        <Mailto email="nicholas.cobbett@gmail.com" obfuscate={false}>
          Email me!
        </Mailto>

      </div>
    )
  }
}

export default Contact;