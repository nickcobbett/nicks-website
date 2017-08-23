import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Route, Switch, HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

const keepAlive = () => {
  fetch("http://nickcobbett.herokuapp.com", {mode: 'no-cors'})
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
};
setInterval(keepAlive, 300000); // every 5 minutes (300000)

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

