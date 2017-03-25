import React, { PropTypes } from 'react';
import RemoveSavedTripButton from './RemoveSavedTripButton';

const propTypes = {
  trip: PropTypes.object.isRequired,
};

const SavedTrip = (props) => {
  const trip = props.trip;
  return (
    <div>
      <div className="restaurant-list-entry col-md-4">
        <div className="card card-block">
          <img className="rounded card-img-top yelp-img" src={trip.imageUrl} alt="restaurant" />
          <div>
            <h4 className="card-title restaurant-li">
              <a href={trip.informationUrl} >{trip.name}</a>
            </h4>
            <h5>Address: {trip.address}</h5>
            <h5>{trip.city}, {trip.state} {trip.zipCode}</h5>
            <RemoveSavedTripButton 
              removeSavedTrip={props.removeSavedTrip}
              trip={trip}
            />
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

SavedTrip.propTypes = propTypes;
export default SavedTrip;
