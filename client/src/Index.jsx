import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from 'axios';
import 'react-dates/lib/css/_datepicker.css';
import './style.css';
import Entrance from './components/Entrance';
import Main from './components/Main';
import Login from './components/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      location: '',
      geoLocation: {},
      attractionResults: [],
      restaurantResults: [],
      mapDestinations: [],
      crimeData: {},
    };
    this.selectDestination = this.selectDestination.bind(this);
    this.setLocationFromSearch = this.setLocationFromSearch.bind(this);
    this.setGeoLocationFromSearch = this.setGeoLocationFromSearch.bind(this);
    this.queryYelp = this.queryYelp.bind(this);
    this.queryCrime = this.queryCrime.bind(this);
  }


  setLocationFromSearch(locationFromSearch) {
    console.log(locationFromSearch);
    this.setState({
      location: locationFromSearch,
    });
  }

  setGeoLocationFromSearch(geoLocationFromSearch) {
    console.log('setting geolocation state in index.jsx', geoLocationFromSearch);
    this.setState({ geoLocation: {
      lat: geoLocationFromSearch.lat(),
      lng: geoLocationFromSearch.lng(),
    } });
  }

  selectDestination(yelpLocation) {
    // this is an object
    this.setState({
      mapDestinations: this.state.mapDestinations.concat(yelpLocation),
    });
  }


  queryCrime(geoLocation) {
    console.log('requesting crime data with', geoLocation);
    return Axios.get('/crime', {
      params: {
        lat: geoLocation.lat(),
        lon: geoLocation.lng(),
      },
    })
    .then((response) => {
      console.log('success fetching crime spots from server');
      this.setState({ crimeData: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  queryYelp(search) {
    const yelpQuery = {
      // change when correct
      location: search.destination || this.state.location || 'san francisco',
      // default query -- add on based on user input after initial list.
      // default blank for first search
      style: search.style ? search.style : '',
      price: search.price ? search.price : '',
    };
    console.log(yelpQuery);
    return Axios.post('/yelp', yelpQuery)
      .then((restaurants) => {
        console.log('success fetching restaurants from server', restaurants.data);
        
        // must query attractions to get attractions
        yelpQuery.query = 'tourist attractions';
        return Axios.post('/yelp', yelpQuery)
        .then((attractions) => {
          console.log('yelp query', yelpQuery);
          console.log('success fetching attractions from server', attractions.data);
          this.setState({
            attractionResults: restaurants.data,
            restaurantResults: attractions.data,
          });
        })
        .catch(error => console.log(error));
      })
      .catch(error =>
        console.log(error),
      );
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            exact path="/" component={() =>
            (<Entrance
              setLocationFromSearch={this.setLocationFromSearch}
              setGeoLocationFromSearch={this.setGeoLocationFromSearch}
              queryYelp={this.queryYelp} queryCrime={this.queryCrime}
              location={this.state.location}
            />)}
          />
          <Route
            path="/main"
            component={() => (
              <Main
                attractionResults={this.state.attractionResults}
                restaurantResults={this.state.restaurantResults}
                selectDestination={this.selectDestination}
                geoLocation={this.state.geoLocation}
                crimeData={this.state.crimeData}
                location={this.state.location}
                queryYelp={this.queryYelp}
              />)}
          />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
