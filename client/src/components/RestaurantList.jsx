import React, { PropTypes } from 'react';
import RestaurantListEntry from './RestaurantListEntry';

const propTypes = {

};

const RestaurantList = props => (
  <div className="yelp-results-restaurants">
    <select className="yelp-select-price" value={props.price} onChange={(event) => {
      props.queryYelp({
        price: event.target.value,
        style: props.style,
      });
    }}>
      <option value="1">*</option>
      <option value="2">**</option>
      <option value="3">***</option>
      <option value="4">****</option>
    </select>
    <select className="yelp-select-style" value={props.style} onChange={(event) => {
      props.queryYelp({
        price: props.price,
        style: event.target.value,
      })
    }}>
      <option value="bars">Bars</option>
      <option value="cafe">Cafe</option>
      <option value="casual">Casual</option>
      <option value="clubs">Clubs</option>
      <option value="restaurant">Restaurant</option>
    </select>
    <ol>
      {props.restaurants.map(value =>
        <RestaurantListEntry restaurant={value} selectDestination={props.selectDestination}
          saveDestination={props.saveDestination}
        />,
      )}
    </ol>
  </div>
);

export default RestaurantList;
