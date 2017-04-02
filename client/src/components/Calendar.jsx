import React from 'react';
import { canMoveKnight, moveKnight } from './Game';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';
import { Grid, Row, Col } from 'react-bootstrap';
import CalendarCol from './CalendarCol';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {calCol, removeCalEntry, updateCalEntry, savetripEntryContainer} = this.props;

    return (
      <div>
        <Grid>
          <Row>
            <h1>Month</h1>
          </Row>
          <Row>
            {calCol.map( (caldata, index, id) =>
              <CalendarCol
                key={index}
                id={index}
                caldata={caldata}
                updateCalEntry={updateCalEntry}
                removeCalEntry={removeCalEntry}
                savetripEntryContainer={savetripEntryContainer}
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
