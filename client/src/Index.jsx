import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import $ from 'jquery';
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

  selectDestination(yelpLocation) {
    this.setState({
      mapDestinations: this.state.mapDestinations.concat(yelpLocation),
    });
  }

  setGeoLocationFromSearch(geoLocationFromSearch) {
    console.log('setting geolocation state in index.jsx', geoLocationFromSearch);
    this.setState({ geoLocation: {
      lat: geoLocationFromSearch.lat(),
      lng: geoLocationFromSearch.lng(),
    } });
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

  queryYelp(searchLocation) {
    const yelpQuery = {
      // change when correct
      location: searchLocation || 'san francisco',
      // default query -- add on based on user input after initial list
      query: 'casual',
    };
    return Axios.post('/yelp', yelpQuery)
      .then(restaurants => {
        console.log('success fetching restaurants from server', restaurants.data);
        return Axios.post('/yelp', yelpQuery)
        .then(attractions => {
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
    // $.ajax({
    //   url: '/yelp',
    //   type: 'POST',
    //   data: yelpQuery,
    //   success: function(restaurants) {
    //     // this is by default and will not change
    //     console.log('success fetching restaurants from server');
    //     yelpQuery.query = 'tourist attractions';
    //     $.ajax({
    //       url: '/yelp',
    //       type: 'POST',
    //       data: yelpQuery,
    //       success: function(attractions) {
    //         // console.log('sucess fetching attractions from server', attractions);
    //         this.setState({
    //           // returns stringified
    //           attractionResults: JSON.parse(restaurants),
    //           restaurantResults: JSON.parse(attractions),
    //         });
    //       }.bind(this),
    //       error: function(error) {
    //         console.log('there was an error in fetching attractions from server');
    //       }
    //     });
    //   }.bind(this),
    //   error: function(error) {
    //     console.log('there was an error in fetching restaurants from server');
    //   },
    // });
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
                props={this.state}
                selectDestination={this.selectDestination}
                location={this.state.location}
              />)}
          />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
