import React from 'react';

const SavedTrip = (props) => {
  const trip = props.trip;
  console.log(trip);
  return (
    <div>
      <div className="restaurant-list-entry col-md-4">
        <div className="card card-block">
          <img className="rounded card-img-top yelp-img" src={trip.imageUrl} alt="picture of a restaurant" />
          <div>
            <h4 className="card-title restaurant-li">
              <a href={trip.informationUrl} >{trip.name}</a>
            </h4>
            <p>
              <h5>Address: {trip.address}</h5>
              <h5>{trip.city}, {trip.state} {trip.zipCode}</h5>
            </p>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default SavedTrip;
