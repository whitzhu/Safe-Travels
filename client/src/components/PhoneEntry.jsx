import React, { PropTypes } from 'react';

const propTypes = {
  storePhoneNumbers: PropTypes.func.isRequired
};

const PhoneEntry = props => {
  <div>
    <div className="container">
      <h1>Get Your Smart Travel Asistant</h1>
      <form>
        <input type="submit" value="Build Your Itinerary" />
      </form>
    </div>
  </div>
};

PhoneEntry.propTypes = propTypes;
export default PhoneEntry;

// const Profile = props => (
//   <div>
//     <div className="container">
//       <h1>Saved Trips!</h1>
//       {props.savedTrips.map(trip => (
//         <SavedTrip
//           trip={trip}
//           removeSavedTrip={props.removeSavedTrip}
//         />
//       ))}
//     </div>
//   </div>
// );
