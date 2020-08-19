import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
 
const routing = (
  <Router>
    <div>
      <h3>Clue Mediator (www.cluemediator.com)</h3>
      
          <NavLink exact activeClassName="active" to="/">Home</NavLink><br />
          <NavLink activeClassName="active" to="/about">About</NavLink><br />
          <NavLink activeClassName="active" to="/contact">Contact</NavLink>
 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)
 
ReactDOM.render(routing, document.getElementById('root'));
