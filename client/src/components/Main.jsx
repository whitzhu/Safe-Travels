import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Weather from './Weather';
import AttractionList from './AttractionList';
import RestaurantList from './RestaurantList';
import GoogleMap from './GoogleMap';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.saveDestination = this.saveDestination.bind(this);
  }

  saveDestination(destination) {
    Axios.post('/saveTrip', {
      destination: destination,
      startDate: this.props.startDate,
      endDate: this.props.endDate,
    })
    .then((res) => {
      console.log('response from /saveTrip', res);
    })
    .catch((error) => {
      console.log('error from /saveTrip', error);
    })
  }

  render() {
    console.log('queried location, ', this.props.location);
    return (
      <div>
        <div className="container">
          <div className="row">
            <h2>
              Welcome to Your Destination {this.props.location}. Safe Travel!
            </h2>
          </div>
          <div className="row">
            <h2>Hungry?</h2>
            <RestaurantList
              saveDestination={this.saveDestination}
              restaurants={this.props.restaurantResults.businesses || []}
              selectDestination={this.props.selectDestination}
              queryYelp={this.props.queryYelp}
            />
          </div>
          <div className="row">
            <h2>Check out some of these attractions!</h2>
            <AttractionList
              saveDestination={this.saveDestination}
              attractions={this.props.attractionResults.businesses || []}
              selectDestination={this.props.selectDestination}
            />
          </div>
          <div className="row">
            <Weather
              location={this.props.location}
            />
          </div>
          <GoogleMap
            crimeData={this.props.crimeData}
            geoLocation={this.props.geoLocation}
            mapDestinations={this.props.mapDestinations}
          />
        </div>
        <footer>
          Be Safe!!
        </footer>
      </div>
    );
  }
}

export default Main;
