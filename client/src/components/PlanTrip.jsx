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

class PlanTrip extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getPlanTrips();
  }

  render() {
    const {savedTrips, removeTripEntryContainerState, planTripEntryContainer, getPlanTrips, removeSavedTrip, removeSavedTripState, calCol, updateCalEntry, removeCalEntry, savetripEntryContainer} = this.props;

    return (
      <div>
        <Grid>
          <Row>
            <Col xs={3} md={3}>
              <TripEntryContainer
                savedTrips={savedTrips}
                planTripEntryContainer={planTripEntryContainer}
                updateCalEntry={updateCalEntry}
                removeSavedTrip={removeSavedTrip}
                removeSavedTripState={removeSavedTripState}
                removeTripEntryContainerState={removeTripEntryContainerState}
                planTripEntryContainer={planTripEntryContainer}
                type='tripContainer'
              >
              </TripEntryContainer>
            </Col>
            <Col xs={9} md={9}>
              <h1>Calendar</h1>
              <Calendar
                calCol={calCol}
                updateCalEntry={updateCalEntry}
                removeCalEntry={removeCalEntry}
                savetripEntryContainer={savetripEntryContainer}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

PlanTrip.propTypes = propTypes;
export default DragDropContext(HTML5Backend)(PlanTrip);
