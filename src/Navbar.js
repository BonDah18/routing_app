import React from 'react'
import {Link, NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand text" to="/">
            Clue Mediator
            </Link>
          </div>
          <ul className="navbar-nav ml-auto d-inline-block">
            <li className="nav-item d-inline-block p-4 mr-1">
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li className="nav-item d-inline-block p-4 mr-1">
              <NavLink activeClassName="active" to="/about">About</NavLink>
            </li>
            <li className="nav-item d-inline-block p-4 mr-1">
              <NavLink activeClassName="active" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    );
}

  export default Navbar