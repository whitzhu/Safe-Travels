import React, { PropTypes } from 'react';
import TripEntry from './TripEntry';

const propTypes = {
  savedTrips: PropTypes.array.isRequired,
};

const PlanTrip  = ({savedTrips}) => (
  <div>
    <h1>Plan Trip</h1>
    {savedTrips.map( (trip, index) => (
     <TripEntry
      key={index}
      trip={trip}
    />
    ))}
  </div>
)

PlanTrip.propTypes = propTypes;
export default PlanTrip;
