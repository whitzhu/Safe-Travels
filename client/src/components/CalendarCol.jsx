import React, { Component, PropTypes} from 'react';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';
import { Row, Col } from 'react-bootstrap';
import CalColTripEntry from './CalColTripEntry';

const calendarColTarget = {
  hover(props, monitor, component) {
    const canDrop = monitor.canDrop();
    const dragIndex = monitor.getItem().index;
    const hoverColDate = props.id;
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

class CalendarCol extends Component {

  render() {
    const {caldata, updateCalEntry, updateSavedTrip, removeCalEntry, savetripEntryContainer, id, connectDropTarget, isOver, isOverCurrent, canDrop, item } = this.props;
    return connectDropTarget(
      <div>
        <Col
          xs={2}
          md={2}
          style={{
            backgroundColor: isOver ? 'red' : 'white',
          }}
          className='calendar-col' id='cal-col-1'
        >
          <p>{caldata.date.slice(-2)}</p>
          {caldata.tripEntry.map( (trip, index) => (
            <CalColTripEntry
              key={trip.yelpID}
              id={trip.yelpID}
              index={index}
              entryId={id}
              tripIndex={index}
              trip={trip}
              removeCalEntry={removeCalEntry}
              savetripEntryContainer={savetripEntryContainer}
              updateCalEntry={updateCalEntry}
              updateSavedTrip={updateSavedTrip}
            />
          ))}
        </Col>
      </div>
    );
  }
}

export default DropTarget(ItemTypes.TRIPENTRY, calendarColTarget, collect)(CalendarCol);
