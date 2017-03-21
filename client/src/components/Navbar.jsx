import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => (
  <div>
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Safe Travel</Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/login">Login</Link></li>
            { props.location ?
              <li><Link to="/main">Main</Link></li> :
              <li><span id="noDestination">Please enter your destination</span></li>
            }
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
