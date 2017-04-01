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
    props.updateCalEntry(tripEntry, componentId)
    // console.log('====inside enddrage==========tripEntry',tripEntry);
    // console.log('==endDrag===dragSource==item', item);
    // console.log('==endDrag===dragSource==getDropResult', dropResult);
  }

  // isDragging(props, monidropResultor) {
  //   return monitor.getItem().id === props.id
  // }
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
    const { trip, connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div>
      <Row>
        <Col xs={12} md={12}>
          <div className="card card-block">
            <img className='trip-entry-image' src={trip.imageUrl} alt="restaurant" />
            <div>
              <h4 className="card-title restaurant-li">
                <a href={trip.informationUrl} >{trip.name}</a>
              </h4>
              <h5>Address: {trip.address}</h5>
              <h5>{trip.city}, {trip.state} {trip.zipCode}</h5>
              <Accordion>
                <Panel header="Hours">
                {trip.hours[0].open.map( (trip, index) => (
                  <p key={index} id={index}>
                    {trip.day}: {trip.start}-{trip.end}
                  </p>
                ))}
                </Panel>
              </Accordion>
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

