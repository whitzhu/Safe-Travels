import React from 'react';
import SearchBar from './Search';
import AirbnbCalendar from './AirbnbCalendar';
import Navbar from './Navbar';

class Entrance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
    };
    this.setSelectedDate = this.setSelectedDate.bind(this);
  }

  setSelectedDate(startDate, endDate) {
    console.log('selectedStartDate is ', startDate);
    console.log('selectedEndDate is ', endDate);
    this.setState({ selectedStartDate: startDate });
    this.setState({ selectedEndDate: endDate });
  }

  // location is passed in as a property
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="jumbotron">
            <h1>Plan Your Trip and Safe Travel</h1>
            <div className="row">
              <div className="form-group col-xs-6">
                <SearchBar queryYelp={this.props.queryYelp} queryCrime={this.props.queryCrime} setDestination={this.setDestination} setLocationFromSearch={this.props.setLocationFromSearch} />
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

