import React from 'react';
import { Link } from 'react-router-dom';
import Weather from './Weather';
import Navbar from './Navbar';

import AttractionList from './AttractionList';
import RestaurantList from './RestaurantList';

import dummyYelpAttractionData from './../../../dummyYelpAttractionData';
import dummyYelpRestaurantData from './../../../dummyYelpRestaurantData';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.props.attractionResults)
    return (
      <div>
        <Navbar />
        <header>
          The main page of Safe Travel
        </header>
        <div>
          <AttractionList attractions={this.props.props.attractionResults.businesses || []} selectDestination={this.props.selectDestination} />
          <RestaurantList restaurants={this.props.props.restaurantResults.businesses || []} selectDestination={this.props.selectDestination} />
        </div>
        <Weather location={this.props.props.location} />
        <footer>
          Be Safe!!
        </footer>
      </div>
    );
  }
}

export default Main;
