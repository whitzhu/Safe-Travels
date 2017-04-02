import React, { Component, PropTypes} from 'react';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';
import { Row, Col } from 'react-bootstrap';
import CalColTripEntry from './CalColTripEntry';

const calendarColTarget = {
  hover(props, monitor, component) {
    const canDrop = monitor.canDrop();
  },

  drop(props, monitor, component) {
    if ( monitor.didDrop()) {
      return;
    }

    console.log("==========drop, calendar-col, component", component);

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
    const {caldata, removeCalEntry, updateCalEntry, savetripEntryContainer, id, connectDropTarget, isOver, isOverCurrent, canDrop, item } = this.props;
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
          <p>Date {caldata.date.getDay()}</p>
          {caldata.tripEntry.map( (trip, index) => (
            <CalColTripEntry
              key={index}
              entryId={id}
              tripIndex={index}
              trip={trip}
              removeCalEntry={removeCalEntry}
              updateCalEntry={updateCalEntry}
              savetripEntryContainer={savetripEntryContainer}
            />
          ))}
        </Col>
      </div>
    );
  }
}

export default DropTarget(ItemTypes.TRIPENTRY, calendarColTarget, collect)(CalendarCol);


