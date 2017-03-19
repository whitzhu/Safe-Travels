import React from 'react';

const RestaurantListEntry = (props) => (
  <div className="restaurant-list-entry">
    <img src={props.restaurant.image_url} alt="" />
    <li>{props.restaurant.name}</li>
    <button value="add to trip" onClick={ () =>
      props.selectDestination(props.restaurant) 
    }>Add to Trip!</button>  
  </div>
);

export default RestaurantListEntry;
