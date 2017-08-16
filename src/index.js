import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router>
        <Route path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/contact" component={Contact}/>
    </Router>
), document.getElementById('root'));
