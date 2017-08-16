import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Router } from 'react-router';
import { HashRouter, Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router>
      <div>
        <Route component={Main}/>
        <Route path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/contact" component={Contact}/>
      </div>
    </Router>
), document.getElementById('root'));
