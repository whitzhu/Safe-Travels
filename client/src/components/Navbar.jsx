import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Safe Travel</Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/main">Public</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
