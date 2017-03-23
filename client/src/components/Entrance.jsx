import React from 'react';
import { Redirect } from 'react-router';
import SearchBar from './Search';
import AirbnbCalendar from './AirbnbCalendar';

class Entrance extends React.Component {
  constructor(props) {
    super(props);
  }

  // location is passed in as a property
  render() {
    return (
      <div>
        { this.props.isSent ?
          <Redirect to="/main" /> :
          <div className="container">
            <div className="jumbotron">
              <h1>Plan Your Trip and Safe Travel</h1>
              <div className="row">
                <div className="form-group col-xs-6">
                  <SearchBar queryYelp={this.props.queryYelp}
                    queryCrime={this.props.queryCrime}
                    setDestination={this.setDestination}
                    setLocationFromSearch={this.props.setLocationFromSearch}
                    setGeoLocationFromSearch={this.props.setGeoLocationFromSearch}
                    geolocation={this.props.geolocation}
                    handleIsSent={this.props.handleIsSent}
                  />
                </div>
                <div className="form-group col-xs-6">
                  <AirbnbCalendar setSelectedDate={this.props.setSelectedDate} />
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Entrance;

