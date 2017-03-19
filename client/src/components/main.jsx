import React from 'react';
import { Link } from 'react-router-dom';

import AttractionList from './AttractionList';
import RestaurantList from './RestaurantList';

import dummyYelpAttractionData from './../../../dummyYelpAttractionData';
import dummyYelpRestaurantData from './../../../dummyYelpRestaurantData';
import Weather from './weather.jsx';


class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.attractionResults)
    return (<div>
      <header>
        The main page of Safe Travel
      </header>
      <div>
        <Link to="/">Go back to Entrance</Link>
        <AttractionList attractions={this.props.attractionResults.businesses || []} />
        <RestaurantList restaurants={this.props.restaurantResults.businesses || []} />
      </div>
      <div>
        <Link to="/login">login</Link>
      </div>
      <Weather location={this.props.location} />
      <footer>
        Be Safe!!
      </footer>
    </div>);
  }
}

export default Main;
