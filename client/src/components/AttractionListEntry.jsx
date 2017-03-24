import React, { PropTypes } from 'react';
import SelectDestinationButton from './SelectDestinationButton';

const propTypes = {
  attraction: PropTypes.object.isRequired,
  selectDestination: PropTypes.func.isRequired,
  saveDestination: PropTypes.func.isRequired,
};

const AttractionListEntry = props => (
  <div className="restaurant-list-entry col-md-4">
    <div className="card card-block">
      <img
        className="rounded card-img-top yelp-img"
        src={props.attraction.image_url}
        alt="restaurant"
      />
      <div>
        <h4 className="card-title restaurant-li">
          <a href={props.attraction.url} >{props.attraction.name}</a>
        </h4>
        <h5>Address: {props.attraction.location.display_address[0]}</h5>
        <h5>{props.attraction.location.display_address[1]}</h5>
        <SelectDestinationButton
          destination={props.attraction}
          selectDestination={props.selectDestination}
          saveDestination={props.saveDestination}
        />
      </div>
      <br />
    </div>
  </div>
);

AttractionListEntry.propTypes = propTypes;
export default AttractionListEntry;
