import React from 'react';
import { Link } from 'react-router-dom';
import AttractionList from './AttractionList.jsx';
import RestaurantList from './RestaurantList.jsx';

const main = () => (
  <div>
    <header>
      The main page of Safe Travel
    </header>
    <div>
      <Link to="/">Go back to Entrance</Link>
      <RestaurantList />
      <AttractionList />
    </div>
    <div>
      <Link to="/login">login</Link>
    </div>
    <footer>
      Be Safe!!
    </footer>
  </div>
);

export default main;
