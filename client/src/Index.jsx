import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import $ from 'jquery';
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
      attractionResults: [],
      restaurantResults: [],
      mapDestinations: [],
    };
    this.selectDestination = this.selectDestination.bind(this);
    this.setLocationFromSearch = this.setLocationFromSearch.bind(this);
    this.queryYelp = this.queryYelp.bind(this);
  }

  selectDestination(yelpLocation) {
    console.log(yelpLocation);
    this.setState({
      mapDestinations: this.state.mapDestinations.concat(yelpLocation),
    });
  }

  setLocationFromSearch(locationFromSearch) {
    console.log('location is ======', locationFromSearch);
    this.setState({
      location: locationFromSearch.value,
    });
  }

  queryYelp(destination) {
    const yelpQuery = {
      // change when correct
      location: destination || 'san francisco',
      // default query -- add on based on user input after initial list
      query: 'casual',
    };
    $.ajax({
      url: '/yelp',
      type: 'POST',
      data: yelpQuery,
      success: function(restaurants) {
        // this is by default and will not change
        console.log('success fetching restaurants from server');
        yelpQuery.query = 'tourist attractions';
        $.ajax({
          url: '/yelp',
          type: 'POST',
          data: yelpQuery,
          success: function(attractions) {
            console.log('sucess fetching attractions from server');
            this.setState({
              // returns stringified
              attractionResults: JSON.parse(restaurants),
              restaurantResults: JSON.parse(attractions),
            });
          }.bind(this),
          error: function(error) {
            console.log('there was an error in fetching attractions from server');
          }
        });
      }.bind(this),
      error: function(error) {
        console.log('there was an error in fetching restaurants from server');
      },
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            exact path="/" component={() =>
            (<Entrance setLocationFromSearch={this.setLocationFromSearch} queryYelp={this.queryYelp} />)}
          />
          <Route path="/main" component={() => (<Main props={this.state} selectDestination={this.selectDestination} />)} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
