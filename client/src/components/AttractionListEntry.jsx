import React from 'react';

const AttractionListEntry = (props) => (
  <div className="restaurant-list-entry col-md-4">
    <div className="card card-block">
      <img className="rounded card-img-top yelp-img" src={props.attraction.image_url} alt="picture of a restaurant" />
      <div>
        <h4 className="card-title restaurant-li">
          <a href={props.attraction.url} >{props.attraction.name}</a>
        </h4>
        <p>
          <h5>Address: {props.attraction.location.display_address[0]}</h5>
          <h5>{props.attraction.location.display_address[1]}</h5>
        </p>
        <button href="#" className="btn btn-primary"
          onClick={() => {
            props.saveDestination(props.attraction);
            props.selectDestination(props.attraction);
          }}
        >Add to Trip!
        </button>
      </div>
      <br />
    </div>
  </div>
);

export default AttractionListEntry;
