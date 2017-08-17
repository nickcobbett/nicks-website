import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import './Contact.css';
import Mailto from 'react-mailto';

class Contact extends Component {
  render() {
    return (
      <div>
        <Grid>
          <div className="Contact">
            <div className="header">Contact</div>
            <div className="line"></div>
            <Mailto email="nicholas.cobbett@gmail.com" obfuscate={false}>
              Email me!
            </Mailto>
          </div>
        </Grid>
      </div>
    )
  }
}

export default Contact;