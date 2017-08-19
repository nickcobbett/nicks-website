import React, { Component } from 'react';
import {Grid, Col} from 'react-bootstrap';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <Grid>
        <div className="Contact">
          <div className="header">Contact</div>
          <div className="line"></div>
          <Col xs={12} md={4} lg={4}>
            <div className="contact-buttons">
              <div className="email">
                <a href="mailto:nicholas.cobbett@gmail.com">
                  <img alt="" src={require('./assets/email-icon.png')}/>
                </a>
              </div>
              <div className="linkedin">
                <a href="https://www.linkedin.com/in/nickcobbett/" target="_blank" rel="noopener noreferrer">
                  <img alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMS4wNDE2N2luIiBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgdGV4dC1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyBpbWFnZS1yZW5kZXJpbmc6b3B0aW1pemVRdWFsaXR5OyBmaWxsLXJ1bGU6ZXZlbm9kZDsgY2xpcC1ydWxlOmV2ZW5vZGQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDIwMSAyMDEiIHdpZHRoPSIxLjA0MTY3aW4iIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgIDwhW0NEQVRBWwogICAgLmZpbDEge2ZpbGw6I0ZFRkVGRX0KICAgIC5maWwwIHtmaWxsOiMzNzlBRDB9CiAgIF1dPgogIDwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl94MDAyMF8xIj48ZyBpZD0iXzU0MTg5NTI4OCI+PHJlY3QgY2xhc3M9ImZpbDAiIGhlaWdodD0iMjAxIiByeD0iMTkiIHJ5PSIxOSIgd2lkdGg9IjIwMSIvPjxnPjxwb2x5Z29uIGNsYXNzPSJmaWwxIiBwb2ludHM9IjM5LDEwMiAzOSwxNjIgNjgsMTYyIDY4LDk3IDY4LDgwIDM5LDgwICIvPjxwYXRoIGNsYXNzPSJmaWwxIiBkPSJNNTQgMzljLTgsMCAtMTUsNyAtMTUsMTUgMCw3IDcsMTQgMTUsMTQgNywwIDE0LC03IDE0LC0xNCAwLC04IC03LC0xNSAtMTQsLTE1eiIvPjxwYXRoIGNsYXNzPSJmaWwxIiBkPSJNMTYxIDEwNWMtMiwtMTUgLTksLTI1IC0zMCwtMjUgLTEyLDAgLTIwLDUgLTI0LDExbDAgMCAwIC0xMSAtMjMgMCAwIDE2IDAgNjYgMjQgMCAwIC00MWMwLC0xMCAyLC0yMSAxNSwtMjEgMTMsMCAxNCwxMyAxNCwyMmwwIDQwIDI1IDAgMCAtNDUgMCAwYzAsLTQgMCwtOCAtMSwtMTJ6Ii8+PC9nPjwvZz48L2c+PC9zdmc+"/>
                </a>
              </div>
              <div className="github">
                  <a href="https://github.com/nickcobbett" target="_blank" rel="noopener noreferrer">
                  <img alt="" src={require('./assets/github-mark-logo.png')}/>
                </a>
              </div>
            </div>
          </Col>
        </div>
      </Grid>
    )
  }
}

export default Contact;

// target="_blank"

                // <a href="mailto:nicholas.cobbett@gmail.com"></a>
