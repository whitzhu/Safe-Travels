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
    this.state = {
      showMap: false,
    }
    this.saveDestination = this.saveDestination.bind(this);
    this.handleShowMap = this.handleShowMap.bind(this);
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

  handleShowMap() {
    this.setState({
      showMap: true,
    });
  }

  render() {
    console.log('queried location, ', this.props.location);
    let map = null;
    if (this.state.showMap) {
      map = (<GoogleMap
        crimeData={this.props.crimeData}
        geoLocation={this.props.geoLocation}
        mapDestinations={this.props.mapDestinations}
      />);
    } 
    return (  
      <div>
        {!this.state.showMap &&
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
          <button href="#" className="btn btn-primary"
            onClick={this.handleShowMap}>Map Destinations
          </button>
          <div className="row">
            <Weather
              location={this.props.location}
            />
          </div>
        </div>
      }
      {this.state.showMap &&
        <GoogleMap
          crimeData={this.props.crimeData}
          geoLocation={this.props.geoLocation}
          mapDestinations={this.props.mapDestinations}
        />  
      }
        <footer>
          Be Safe!!
        </footer>
      </div>
    );
  }
}

export default Main;
