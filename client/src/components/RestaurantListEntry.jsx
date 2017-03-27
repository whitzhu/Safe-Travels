import React from 'react';
import SelectDestinationButton from './SelectDestinationButton';

const RestaurantListEntry = (props) => (
  <div className="restaurant-list-entry col-md-4">
    <div className="card card-block">
      <img className="img-rounded card-img-top yelp-img" src={props.restaurant.image_url} alt="picture of a restaurant" />
      <div>
        <h4 className="card-title restaurant-li">
          <a href={props.restaurant.url}>{props.restaurant.name}</a>
        </h4>
        <p className="card-text"><span>Price: {props.restaurant.price}</span>
        <span> Rating: {props.restaurant.rating}</span>
        </p>
        <h5>Address: {props.restaurant.location.display_address[0]}</h5>
        <h5>{props.restaurant.location.display_address[1]}</h5>
        <SelectDestinationButton
          destination={props.restaurant}
          selectDestination={props.selectDestination}
          saveDestination={props.saveDestination}
        />
      </div>
      <br />
    </div>
  </div>
);

export default RestaurantListEntry;
