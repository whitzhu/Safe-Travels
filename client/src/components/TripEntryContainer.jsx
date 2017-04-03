import React, { Component, PropTypes} from 'react';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';
import { Row, Col } from 'react-bootstrap';
import TripEntry from './TripEntry';

const tripEntryContainerTarget = {
  hover(props, monitor, component) {
    const canDrop = monitor.canDrop();
  },

  drop(props, monitor, component) {
    if ( monitor.didDrop()) {
      return;
    }

    return {
      moved: true,
      componentId: component.props.id,
      type: component.props.type
    };
  }
}

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    item: monitor.getItem(),
  }
}

class tripEntryContainer extends Component {
  renderOverlay(color) {
    return (
      <div
        style={{
          backgroundColor: color,
        }}
      />
    );
  }

  render() {
    const {savedTrips, updateCalEntry, removeSavedTrip, removeSavedTripState, connectDropTarget, isOver, isOverCurrent, canDrop, item } = this.props;
    return connectDropTarget(
      <div>
        <Col
          xs={12}
          md={12}
          style={{
            backgroundColor: isOver ? 'red' : 'white',
          }}
          className='trip-entry-container'
        >
         <h4>Plan Trip</h4>
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
      </div>
    );
  }
}

export default DropTarget(ItemTypes.TRIPENTRY, tripEntryContainerTarget, collect)(tripEntryContainer);


