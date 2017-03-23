import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => (
  <div>
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand" onClick={props.handleIsSentFalse}>Safe Travel</Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li>
              <form action="/login/facebook" method="GET">
                <input type="submit" value="Log In with facebook" className="NavbarButton"></input>
              </form>
            </li>
            { props.location ?
              <li><Link to="/main">Main</Link></li> :
              <li><span className="NavbarButton">Please enter your destination</span></li>
            }
            <li onClick={props.getSavedTrips}><Link to="/profile">Profile</Link></li>
            { props.location ? <li><Link to="/map">Map</Link></li> : null }   
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
