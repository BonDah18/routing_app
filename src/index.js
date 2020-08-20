import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import Navbar from './Navbar';
 
const routing = (
  <Router>
    <div>
      <Navbar />
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
