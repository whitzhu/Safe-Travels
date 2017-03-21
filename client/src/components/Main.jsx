import React from 'react';
import { Link } from 'react-router-dom';
import Weather from './Weather';
import Navbar from './Navbar';
import AttractionList from './AttractionList';
import RestaurantList from './RestaurantList';
import GoogleMap from './GoogleMap';


class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('queried location, ', this.props.location);
    return (
      <div>
        <Navbar />
        <header>
          The main page of Safe Travel
        </header>
        <div>
          <h2>Hungry?</h2>
          <RestaurantList
            restaurants={this.props.restaurantResults.businesses || []}
            selectDestination={this.props.selectDestination}
            queryYelp={this.props.queryYelp}
          />
          <h2>Check out some of these attractions!</h2>
          <AttractionList
            attractions={this.props.attractionResults.businesses || []}
            selectDestination={this.props.selectDestination}
          />
        </div>
        <Weather
          location={this.props.location}
        />
        <GoogleMap
          crimeData={this.props.crimeData}
          geoLocation={this.props.geoLocation}
          mapDestinations={this.props.mapDestinations}
        />
        <footer>
          Be Safe!!
        </footer>
      </div>
    );
  }
}

export default Main;
