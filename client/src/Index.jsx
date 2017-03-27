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
import GoogleMap from './components/GoogleMap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      location: '',
      geoLocation: {},
      attractionResults: [],
      restaurantResults: [],
      crimeData: {},
      isSent: false,
      savedTrips: [],
      yelpPrice: '3',
      yelpStyle: 'casual',
      mapDestinations: [],
    };
    this.startDate = null;
    this.endDate = null;
    this.mapDestinations = [];
    this.setLocationFromSearch = this.setLocationFromSearch.bind(this);
    this.setGeoLocationFromSearch = this.setGeoLocationFromSearch.bind(this);
    this.queryYelp = this.queryYelp.bind(this);
    this.queryCrime = this.queryCrime.bind(this);
    this.setSelectedDate = this.setSelectedDate.bind(this);
    this.handleIsSent = this.handleIsSent.bind(this);
    this.getSavedTrips = this.getSavedTrips.bind(this);
    this.selectDestination = this.selectDestination.bind(this);
    this.handleIsSentFalse = this.handleIsSentFalse.bind(this);
    this.removeSavedTrip = this.removeSavedTrip.bind(this);
    this.setMapDestinations = this.setMapDestinations.bind(this);
  }

  removeSavedTrip(trip) {
    return Axios.post('/removeSavedTrip', trip)
      .then((res) => {
        console.log('Correctly removed trip');
      })
      .catch(error => console.log(error));
  }

  getSavedTrips() {
    Axios.get('/savedTrips')
    .then((res) => {
      this.setState({ savedTrips: res.data });
    });
  }

  setLocationFromSearch(locationFromSearch) {
    this.setState({
      location: locationFromSearch,
    });
  }

  setGeoLocationFromSearch(geoLocationFromSearch) {
    this.setState({ geoLocation: {
      lat: geoLocationFromSearch.lat(),
      lng: geoLocationFromSearch.lng(),
    } });
  }

  setMapDestinations() {
    this.setState({
      mapDestinations: this.mapDestinations,
    });
  }

  setSelectedDate({ startDate, endDate }) {
    this.startDate = startDate === null ? this.startDate : startDate;
    this.endDate = endDate === null ? this.endDate : endDate;
  }

  selectDestination(yelpLocation) {
    this.mapDestinations = this.mapDestinations.concat(yelpLocation);
  }

  handleIsSent() {
    this.setState({ isSent: true });
  }

  handleIsSentFalse() {
    this.setState({ isSent: false });
  }

  queryCrime(geoLocation) {
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
    const statePrice = search.price ? search.price : '3';
    const stateStyle = search.style ? search.style : 'casual';
    const yelpRestaurantQuery = {
      location: search.destination || this.state.location || 'san francisco',

      // default query -- add on based on user input after initial list.
      // default to blank price for first search
      query: search.style ? search.style : this.state.yelpStyle,
      price: search.price ? search.price : '',
    };
    return Axios.post('/yelp', yelpRestaurantQuery)
      .then((restaurants) => {
        // must query attractions to get attractions
        // reset price prior to attractions query
        const yelpAttractionQuery = {
          location: yelpRestaurantQuery.location,
          query: 'tourist attractions',
          price: '',
        };
        return Axios.post('/yelp', yelpAttractionQuery)
          .then((attractions) => {
            console.log('success fetching attractions from server', attractions.data);
            this.setState({
              attractionResults: attractions.data,
              restaurantResults: restaurants.data,
              yelpPrice: statePrice,
              yelpStyle: stateStyle,
            });
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar
            location={this.state.location}
            getSavedTrips={this.getSavedTrips}
            geoLocation={this.state.geoLocation}
            handleIsSentFalse={this.handleIsSentFalse}
            setMapDestinations={this.setMapDestinations}
          />
          <Route
            exact path="/" component={() =>
            (<Entrance
              setLocationFromSearch={this.setLocationFromSearch}
              setGeoLocationFromSearch={this.setGeoLocationFromSearch}
              queryYelp={this.queryYelp}
              queryCrime={this.queryCrime}
              location={this.state.location}
              setSelectedDate={this.setSelectedDate}
              getlocation={this.state.geoLocation}
              isSent={this.state.isSent}
              handleIsSent={this.handleIsSent}
            />)}
          />
          <Route
            path="/main"
            component={() => (
              <Main
                attractionResults={this.state.attractionResults}
                restaurantResults={this.state.restaurantResults}
                geoLocation={this.state.geoLocation}
                crimeData={this.state.crimeData}
                location={this.state.location}
                queryYelp={this.queryYelp}
                startDate={this.startDate}
                endDate={this.endDate}
                yelpPrice={this.state.yelpPrice}
                yelpStyle={this.state.yelpStyle}
                selectDestination={this.selectDestination}
                handleIsSentFalse={this.handleIsSentFalse}
              />)}
          />
          <Route path="/login" component={Login} />
          <Route
            path="/profile"
            component={() => (
              <Profile
                savedTrips={this.state.savedTrips}
                removeSavedTrip={this.removeSavedTrip}
              />)}
          />
          <Route
            path="/map"
            component={() =>
              (<GoogleMap
                geoLocation={this.state.geoLocation}
                crimeData={this.state.crimeData}
                mapDestinations={this.state.mapDestinations}
              />)
            }
          />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
