import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import Resume from './Resume.js';
import Projects from './Projects.js';
import Contact from './Contact.js';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/home' component={Home}/>
          <Route path='/resume' component={Resume}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </main>
    );
  }
}

export default Main;