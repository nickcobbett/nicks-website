import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

ReactDOM.render((
    <Router>
      <Switch>
        <Route component={App}>
          <Route path="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/contact" component={Contact}/>
        </Route>
      </Switch>
    </Router>
), document.getElementById('root'));

