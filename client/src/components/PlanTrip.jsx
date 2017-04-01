import React, { PropTypes } from 'react';
import TripEntry from './TripEntry';
import Calendar from './Calendar';
import { Grid, Row, Col } from 'react-bootstrap';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

const propTypes = {
  savedTrips: PropTypes.array.isRequired,
};

const PlanTrip  = ({savedTrips, removeSavedTrip, removeSavedTripState, calCol, updateCalEntry}) => (
  <div>

    <Grid>
      <Row>
      <Col xs={3} md={3}>
        <h1>Plan Trip</h1>
        {savedTrips.map( (trip, index) => (
         <TripEntry
          key={index}
          index={index}
          trip={trip}
          updateCalEntry={updateCalEntry}
          removeSavedTrip={removeSavedTrip}
          removeSavedTripState={removeSavedTripState}
        />
        ))}
      </Col>
      <Col xs={9} md={9}>
        <h1>Calendar</h1>
        <Calendar
        calCol={calCol}
        />
      </Col>
      </Row>
    </Grid>
  </div>
)

PlanTrip.propTypes = propTypes;
export default DragDropContext(HTML5Backend)(PlanTrip);
