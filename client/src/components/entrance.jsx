import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './Search';
import AirbnbCalendar from './AirbnbCalendar';

class Entrance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: null,
      selectedStartDate: null,
      selectedEndDate: null,
    };
    this.setDestination = this.setDestination.bind(this);
    this.setSelectedDate = this.setSelectedDate.bind(this);
  }

  setDestination(dest) {
    this.props.queryYelp(dest);
    this.setState({ destination: dest });
  }

  setSelectedDate(startDate, endDate) {
    console.log('selectedStartDate is ', startDate);
    console.log('selectedEndDate is ', endDate);
    this.setState({ selectedStartDate: startDate });
    this.setState({ selectedEndDate: endDate });
  }

  render() {
    return (
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
        <div>
          <SearchBar setDestination={this.setDestination} setLocationFromSearch={this.props.setLocationFromSearch} />
        </div>
        <div> Enter your travel date
          <AirbnbCalendar setSelectedDate={this.setSelectedDate} />
        </div>
      </div>
    );
  }
}

export default Entrance;

