import React from 'react';

const RestaurantListEntry = (props) => (
  <div className="restaurant-list-entry">
    <li>{props.restaurant.name}</li>
  </div>
);

export default RestaurantListEntry;
