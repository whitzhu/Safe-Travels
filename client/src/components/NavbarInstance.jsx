import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import Mailto from 'react-mailto';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const propTypes = {
  login: PropTypes.func.isRequired,
  handleIsSentFalse: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  getSavedTrips: PropTypes.func.isRequired,
  setMapDestinations: PropTypes.func.isRequired,
};

const NavbarInstance = props => (
  <div>
    <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" onClick={props.handleIsSentFalse}>Safe Travels</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
           <Nav>
            { document.cookie.replace(/(?:(?:^|.*;\s*)isLoggedIn\s*\=\s*([^;]*).*$)|^.*$/, '$1') === 'true' ?
              <Nav>
                <NavItem><Link to="/profile">Profile</Link></NavItem>
                <NavItem><Link to="/plan-trip">Plan Trip</Link></NavItem>
              </Nav>
              :
              null
            }
            { props.location ?
              <NavItem><Link to="/main">Recommendations</Link></NavItem>
              :
              <NavItem>Please Enter Destination</NavItem>
            }
            { props.location ? <NavItem onClick={props.setMapDestinations}><Link to="/map">Map</Link></NavItem> : null }
          </Nav>
          <Nav pullRight>
              { document.cookie.replace(/(?:(?:^|.*;\s*)isLoggedIn\s*\=\s*([^;]*).*$)|^.*$/, '$1') === 'true' ?
                <NavItem>
                  <Link to="/" onClick={props.logout}>Logout</Link>
                </NavItem>
                :
                <NavItem>
                  <Link to="/login" onClick={props.login}>Login</Link>
                </NavItem>
              }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

NavbarInstance.propTypes = propTypes;
export default NavbarInstance;
