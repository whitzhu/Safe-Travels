import React from 'react';
import SavedTrip from './SavedTrip';

const Profile = (props) => {
  console.log(props.savedTrips);
  return (<div>
    <h1>Saved Trips!</h1>
    {props.savedTrips.map(trip => (
      <SavedTrip trip={trip} />
    ))}
  </div>);
};

export default Profile;
