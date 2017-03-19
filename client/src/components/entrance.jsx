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
        <h1>Hello World!</h1>
        <h1>Safe Travel</h1>
        <p> want to travel safe? </p>
        <SearchBar setDestination={this.setDestination} setLocationFromSearch={this.props.setLocationFromSearch} />
        <div>
          <Link to="/main">public</Link>
        </div>
        <div>
          <Link to="/login">login</Link>
        </div>
        <div> Enter your travel date
          <AirbnbCalendar setSelectedDate={this.setSelectedDate} />
        </div>
      </div>
    );
  }
}

export default Entrance;
         
