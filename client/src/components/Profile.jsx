import React, { PropTypes } from 'react';
import SavedTrip from './SavedTrip';

const propTypes = {
  savedTrips: PropTypes.array.isRequired,
};

const Profile = props => (
  <div>
    <div className="container">
      <h1>Saved Trips!</h1>
      {props.savedTrips.map(trip => (
        <SavedTrip
          trip={trip}
          removeSavedTrip={props.removeSavedTrip}
        />
      ))}
    </div>
  </div>
);

Profile.propTypes = propTypes;
export default Profile;
