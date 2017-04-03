import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import TripEntryContainer from './TripEntryContainer';
import TripEntry from './TripEntry';
import Calendar from './Calendar';

const propTypes = {
  savedTrips: PropTypes.array.isRequired,
};

const PlanTrip  = ({savedTrips, savedTripEntryContainer, updateSavedTrip, storeCalendar, removeSavedTrip, removeSavedTripState, calCol, updateCalEntry, removeCalEntry, savetripEntryContainer}) => (
  <div>
    <Grid>
      <Row>
        <Col xs={3} md={3}>
          <TripEntryContainer
            savedTrips={savedTrips}
            updateCalEntry={updateCalEntry}
            removeSavedTrip={removeSavedTrip}
            removeSavedTripState={removeSavedTripState}
            type='tripContainer'
          >
          </TripEntryContainer>
        </Col>
        <Col xs={9} md={9}>
          <h1>Calendar</h1>
          <button onClick={storeCalendar}>Save Calendar</button>
          <Calendar
            calCol={calCol}
            removeCalEntry={removeCalEntry}
            savetripEntryContainer={savetripEntryContainer}
            updateCalEntry={updateCalEntry}
            updateSavedTrip={updateSavedTrip}
          />
        </Col>
      </Row>
    </Grid>
  </div>
)

PlanTrip.propTypes = propTypes;
export default DragDropContext(HTML5Backend)(PlanTrip);
