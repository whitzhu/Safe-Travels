import React, { PropTypes } from 'react';
import { Redirect } from 'react-router';
import SearchBar from './Search';
import AirbnbCalendar from './AirbnbCalendar';

const propTypes = {
  isSent: PropTypes.bool.isRequired,
  queryYelp: PropTypes.func.isRequired,
  queryCrime: PropTypes.func.isRequired,
  setLocationFromSearch: PropTypes.func.isRequired,
  setGeoLocationFromSearch: PropTypes.func.isRequired,
};

class Entrance extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        { this.props.isSent ?
          <Redirect to="/main" /> :
          <div className="container entrance">
            <div className="jumbotron">
              <h1>Plan Your Trip and Travel Safely</h1>
              <div className="row">
                <div className="form-group col-xs-6 calendar">
                  <AirbnbCalendar setSelectedDate={this.props.setSelectedDate} />
                </div>
                <div className="form-group col-xs-6 search-bar">
                  <SearchBar
                    queryYelp={this.props.queryYelp}
                    queryCrime={this.props.queryCrime}
                    setDestination={this.setDestination}
                    setLocationFromSearch={this.props.setLocationFromSearch}
                    setGeoLocationFromSearch={this.props.setGeoLocationFromSearch}
                    geolocation={this.props.geolocation}
                    handleIsSent={this.props.handleIsSent}
                  />
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

Entrance.propTypes = propTypes;
export default Entrance;

