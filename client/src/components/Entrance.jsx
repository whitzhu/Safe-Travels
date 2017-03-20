import React from 'react';
import SearchBar from './Search';
import AirbnbCalendar from './AirbnbCalendar';
import Navbar from './Navbar';

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
        <Navbar />
        <div className="container">
          <div className="jumbotron">
            <h1>Plan Your Trip and Safe Travel</h1>
            <div className="row">
              <div className="form-group col-xs-6">
                <SearchBar setDestination={this.setDestination} setLocationFromSearch={this.props.setLocationFromSearch} />
              </div>
              <div className="form-group col-xs-6">
                <AirbnbCalendar setSelectedDate={this.setSelectedDate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Entrance;

