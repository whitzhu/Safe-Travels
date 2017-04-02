import React, { Component, PropTypes } from 'react';
import RemoveSavedTripButton from './RemoveSavedTripButton';
import { DragSource } from 'react-dnd';
import { ItemTypes } from './Constants';
import { Accordion, Panel, Row, Col } from 'react-bootstrap';

const propTypes = {
  trip: PropTypes.object.isRequired,
};

let tripEntry;
const tripSource = {
  beginDrag(props, monitor, Component) {
    const item = {id: props.id};
    // console.log('==beginDrag===dragSource==Component', Component);
    tripEntry = Component.props.trip
    return item;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    const componentId = dropResult.componentId;
    const tripEntryId = component.props.index;
    const type = dropResult.type;
    if (type === 'calendar') {
      props.updateCalEntry(tripEntry, componentId);
      props.removeSavedTripState(tripEntryId);
    }
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

class TripEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { index, trip, removeSavedTrip, removeSavedTripState, connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div>
      <Row>
        <Col xs={12} md={12}>
          <div className="card card-block">
            <img className='trip-entry-image' src={trip.imageUrl} alt="restaurant" />
            <div>
              <h5 className="card-title restaurant-li">
                <a href={trip.informationUrl} >{trip.name}</a>
              </h5>
              <p>
                {trip.displayAddress}
              </p>
              <a
                onClick={() => {
                  removeSavedTrip(trip);
                  removeSavedTripState(index);
                }}
                className='remove-trip'
              >Remove</a>
            </div>
            <br />
          </div>
        </Col>
      </Row>
      </div>
    );
  }
}

TripEntry.propTypes = propTypes;
export default DragSource(ItemTypes.TRIPENTRY, tripSource, collect)(TripEntry);

