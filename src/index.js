import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Route, Switch, HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');

ReactDOM.render((
    <HashRouter>
      <Switch>
        <Route component={App}>
          <Route path="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/contact" component={Contact}/>
        </Route>
      </Switch>
    </HashRouter>
), document.getElementById('root'));
registerServiceWorker();

