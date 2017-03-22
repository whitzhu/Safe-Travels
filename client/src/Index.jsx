import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from 'axios';
import 'react-dates/lib/css/_datepicker.css';
import './style.css';
import Entrance from './components/Entrance';
import Main from './components/Main';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

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
      startDate: null,
      endDate: null,
    };
    this.selectDestination = this.selectDestination.bind(this);
    this.setLocationFromSearch = this.setLocationFromSearch.bind(this);
    this.setGeoLocationFromSearch = this.setGeoLocationFromSearch.bind(this);
    this.queryYelp = this.queryYelp.bind(this);
    this.queryCrime = this.queryCrime.bind(this);
    this.setSelectedDate = this.setSelectedDate.bind(this);
  }

  shouldComponentUpdate() {
    return false;
  }

  setLocationFromSearch(locationFromSearch) {
    console.log(locationFromSearch);
    this.setState({
      location: locationFromSearch,
    });
    this.forceUpdate();
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
    console.log('this is the selected destination', yelpLocation.name);
    this.setState({
      mapDestinations: this.state.mapDestinations.concat(yelpLocation),
    });
  }

  setSelectedDate({ startDate, endDate }) {
    this.setState({ startDate, endDate });
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
      query: search.style ? search.style : 'casual',
      price: search.price ? search.price : '',
    };
    return Axios.post('/yelp', yelpQuery)
      .then((restaurants) => {
        console.log('success fetching restaurants from server', restaurants.data);
        // must query attractions to get attractions
        // reset price prior to attractions query
        yelpQuery.query = 'tourist attractions';
        yelpQuery.price ='';
        return Axios.post('/yelp', yelpQuery)
        .then((attractions) => {
          console.log('success fetching attractions from server', attractions.data);
          this.setState({
            attractionResults: attractions.data,
            restaurantResults: restaurants.data,
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
          <Navbar location={this.state.location} />
          <Route
            exact path="/" component={() =>
            (<Entrance
              setLocationFromSearch={this.setLocationFromSearch}
              setGeoLocationFromSearch={this.setGeoLocationFromSearch}
              queryYelp={this.queryYelp}
              queryCrime={this.queryCrime}
              location={this.state.location}
              setSelectedDate={this.setSelectedDate}
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
                mapDestinations={this.state.mapDestinations}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
              />)}
          />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
