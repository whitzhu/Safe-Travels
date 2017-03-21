import React from 'react';

const RestaurantListEntry = (props) => (
  <div className="restaurant-list-entry">
    <div className="card">
      <img className="rounded card-img-top yelp-img" src={props.restaurant.image_url} alt="picture of a restaurant" />
      <div className="card-block">
        <a href={props.restaurant.url} className="card-title restaurant-li">{props.restaurant.name}</a>
        <p className="card-text"><span>price: {props.restaurant.price}</span>
        <span>  rating: {props.restaurant.rating}</span>
        </p>
        <button href="#" className="btn btn-primary" onClick={ () =>
      props.selectDestination(props.restaurant)} >Add to Trip!</button>
      </div>
      <br />
    </div>
  </div>






    // <img className="rounded yelp-img" src={props.restaurant.image_url} alt="" />
    // <li className="restaurant-li">{props.restaurant.name}</li>
    // <button value="add to trip" onClick={ () =>
    //   props.selectDestination(props.restaurant) 
    // }>Add to Trip!</button>  
);

export default RestaurantListEntry;
