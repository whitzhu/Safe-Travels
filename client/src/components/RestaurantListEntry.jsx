import React from 'react';

const RestaurantListEntry = (props) => (
<<<<<<< HEAD
  <div className="restaurant-list-entry col-md-4">
    <div className="card card-block">
      <img className="rounded card-img-top yelp-img" src={props.restaurant.image_url} alt="picture of a restaurant" />
      <div>
        <h4 className="card-title restaurant-li">
          <a href={props.restaurant.url}>{props.restaurant.name}</a>
        </h4>
        <p className="card-text"><span>Price: {props.restaurant.price}</span>
        <span>  Rating: {props.restaurant.rating}</span>
        </p>
        <p>
          <h5>Address: {props.restaurant.location.display_address[0]}</h5>
          <h5>{props.restaurant.location.display_address[1]}</h5>
        </p>
        <button href="#" className="btn btn-primary" onClick={ () =>
          props.selectDestination(props.restaurant)} >Add to Trip!
        </button>
      </div>
      <br />
    </div>
=======
  <div className="restaurant-list-entry">
    <img src={props.restaurant.image_url} alt="" />
    <li>{props.restaurant.name}</li>
    <button value="add to trip" onClick={ () => {
      props.saveDestination(props.restaurant)
      props.selectDestination(props.restaurant)}}
    >Add to Trip!</button>
>>>>>>> (feat) implement saveDestination function on-click
  </div>
    // <img className="rounded yelp-img" src={props.restaurant.image_url} alt="" />
    // <li className="restaurant-li">{props.restaurant.name}</li>
    // <button value="add to trip" onClick={ () =>
    //   props.selectDestination(props.restaurant) 
    // }>Add to Trip!</button>  
);

export default RestaurantListEntry;
