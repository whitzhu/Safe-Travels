import React, { PropTypes } from 'react';
import Axios from 'axios';
import Weather from './Weather';
import AttractionList from './AttractionList';
import RestaurantList from './RestaurantList';
import GoogleMap from './GoogleMap';

const propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  location: PropTypes.string.isRequired,
  restaurantResults: PropTypes.object.isRequired,
  selectDestination: PropTypes.func.isRequired,
  queryYelp: PropTypes.func.isRequired,
  yelpPrice: PropTypes.string.isRequired,
  yelpStyle: PropTypes.string.isRequired,
  attractionResults: PropTypes.object.isRequired,
  crimeData: PropTypes.array.isRequired,
  geoLocation: PropTypes.object.isRequired,
};

const defaultProps = {
  startDate: null,
  endDate: null,
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     // mapDestinations: [],
      showMap: false,
    };
    this.saveDestination = this.saveDestination.bind(this);
    this.handleShowMap = this.handleShowMap.bind(this);
    // this.selectDestination = this.selectDestination.bind(this);
  }

  saveDestination(destination) {
    return Axios.post('/saveTrip', {
      destination,
      startDate: this.props.startDate,
      endDate: this.props.endDate,
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  // selectDestination(yelpLocation) {
  //   // this is an object
  //   this.setState({
  //     mapDestinations: this.state.mapDestinations.concat(yelpLocation),
  //   });
  // }

  handleShowMap() {
    console.log(this.state.mapDestinations);
    this.setState({
      showMap: !this.state.showMap,
    });
  }

  render() {
    console.log('queried location, ', this.props.location);
    return (
      <div className="main">
        {!this.state.showMap &&
        <div className="container">
          <div className="row">
            <h3 className="main-title">
              Welcome to {this.props.location}. Safe Travel!
            </h3>
          </div>
          <div className="row">
            <h3 className="restaurant-title">Pick your favorite restaurants</h3>
            <RestaurantList
              saveDestination={this.saveDestination}
              restaurants={this.props.restaurantResults.businesses || []}
              selectDestination={this.props.selectDestination}
              queryYelp={this.props.queryYelp}
              price={this.props.yelpPrice}
              style={this.props.yelpStyle}
            />
          </div>
          <hr className="hr-style" />
          <div className="row">
            <h3 className="attraction-title">Check out some of these attractions!</h3>
            <AttractionList
              saveDestination={this.saveDestination}
              attractions={this.props.attractionResults.businesses || []}
              selectDestination={this.props.selectDestination}
            />
          </div>
          <hr className="hr-style" />
          {/* <button
            href="#"
            className="btn btn-primary"
            onClick={this.handleShowMap}
          >Map Destinations</button>*/}
          <div className="row seven-cols weather">
            <Weather
              location={this.props.location}
            />
          </div>
        </div>
        }
        {this.state.showMap &&
          <GoogleMap
            crimeData={this.props.crimeData}
            handleShowMap={this.handleShowMap}
            geoLocation={this.props.geoLocation}
            mapDestinations={this.state.mapDestinations}
          />
        }
      </div>
    );
  }
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;
export default Main;
