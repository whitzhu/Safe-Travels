import React from 'react';

const AttractionListEntry = (props) => (
  <div className="attraction-list-entry">
    <img className="rounded yelp-img" src={props.attraction.image_url} alt="" />
    <li>{props.attraction.name}</li>
    <button
      value="add to trip" onClick={() =>
      props.selectDestination(props.attraction) 
    }>Add to Trip!</button>  
  </div>
);

export default AttractionListEntry;
