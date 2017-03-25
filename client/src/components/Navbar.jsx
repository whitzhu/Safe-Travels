import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const propTypes = {
  handleIsSentFalse: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  getSavedTrips: PropTypes.func.isRequired,
};

const Navbar = props => (
  <div>
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand" onClick={props.handleIsSentFalse}>Safe Travel</Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li>
              { document.cookie.replace(/(?:(?:^|.*;\s*)isLoggedIn\s*\=\s*([^;]*).*$)|^.*$/, '$1') === 'true' ?
                <form action="/logout" method="GET">
                  <input type="submit" value="Log Out" className="NavbarButton"></input>
                </form>
                :
                <form action="/login/facebook" method="GET">
                  <input type="submit" value="Log In with facebook" className="NavbarButton"></input>
                </form>
              }
            </li>
            { props.location ?
              <li><Link to="/main">Main</Link></li> :
              <li className='main-nav'>Please Enter Destination</li>
            }
            <li className='profile-nav' onClick={props.getSavedTrips}><Link to="/profile">Profile</Link></li>
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

Navbar.propTypes = propTypes;
export default Navbar;
