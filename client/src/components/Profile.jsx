import React from 'react';
import SavedTrip from './SavedTrip';

const Profile = (props) => (
  <div>
    {props.savedTrips.map(trip => (
      <SavedTrip trip={trip} />
    ))}
  </div>
);

export default Profile;
