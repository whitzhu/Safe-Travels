import React, { PropTypes } from 'react';
import { Redirect } from 'react-router';
import SearchBar from './SearchBar';
import AirbnbCalendar from './AirbnbCalendar';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

const propTypes = {
  isSent: PropTypes.bool.isRequired,
  queryYelp: PropTypes.func.isRequired,
  queryCrime: PropTypes.func.isRequired,
  setLocationFromSearch: PropTypes.func.isRequired,
  setGeoLocationFromSearch: PropTypes.func.isRequired,
  setSelectedDate: PropTypes.func.isRequired
};

class Entrance extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        { this.props.isSent ?
          <Redirect to="/main" />
          :
          <Jumbotron>
            <h1>Plan Your Trip and Travel Safely</h1>
            <Grid>
              <Row>
                <Col xs={12} md={6}>
                  <AirbnbCalendar setSelectedDate={this.props.setSelectedDate} />
                </Col>
                <Col xs={12} md={6}>
                  <SearchBar
                    queryYelp={this.props.queryYelp}
                    queryCrime={this.props.queryCrime}
                    setDestination={this.setDestination}
                    setLocationFromSearch={this.props.setLocationFromSearch}
                    setGeoLocationFromSearch={this.props.setGeoLocationFromSearch}
                    geolocation={this.props.geolocation}
                    handleIsSent={this.props.handleIsSent}
                  />
                </Col>
              </Row>
            </Grid>
          </Jumbotron>
        }
      </div>
    );
  }
}

Entrance.propTypes = propTypes;
export default Entrance;

