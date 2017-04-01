import React, { Component, PropTypes } from 'react';
import RemoveSavedTripButton from './RemoveSavedTripButton';
import { DragSource } from 'react-dnd';
import { ItemTypes } from './Constants';
import { Row, Col } from 'react-bootstrap';

const calColTripEntrySource = {
  beginDrag(props, monitor, Component) {
    const item = {id: props.id};
    // tripEntry = Component.props.trip
    return item;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    const componentId = dropResult.componentId;
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

class CalColTripEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { trip, connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div>
        <Row>
          <Col xs={12} md={12} className='cal-col-trip-entry'>
            <img className='trip-entry-image' src={trip.imageUrl} alt="restaurant" />
            <div>
              <p className=''>
                <a href={trip.informationUrl} >{trip.name}</a>
              </p>
              <p>Address: {trip.address}</p>
              <p>{trip.city}, {trip.state} {trip.zipCode}</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DragSource(ItemTypes.TRIPENTRY, calColTripEntrySource, collect)(CalColTripEntry);

