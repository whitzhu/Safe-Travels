import React from 'react';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';
import { Grid, Row, Col } from 'react-bootstrap';
import CalendarCol from './CalendarCol';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {calCol, updateCalEntry, updateSavedTrip, removeCalEntry, savetripEntryContainer} = this.props;
    return (
      <div>
        <Grid>
          <Row>
            <h1>April</h1>
          </Row>
          <Row>
            {calCol.map( (caldata, index, id) =>
              <CalendarCol
                key={index}
                id={index}
                caldata={caldata}
                removeCalEntry={removeCalEntry}
                savetripEntryContainer={savetripEntryContainer}
                updateCalEntry={updateCalEntry}
                updateSavedTrip={updateSavedTrip}
                type='calendar'
              />
            )}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Calendar;
