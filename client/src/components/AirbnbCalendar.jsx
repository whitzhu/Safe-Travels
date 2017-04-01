import React, { PropTypes } from 'react';
import { DateRangePicker } from 'react-dates';

const propTypes = {
  setSelectedDate: PropTypes.func.isRequired,
};

export default class AirbnbCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
      dateStorage: []
    };
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.dateArray = [];
  }

  onDatesChange({ startDate, endDate }) {
    if (startDate !== null) {
        this.dateArray[0] = startDate;
    }
    if (endDate !== null) {
      this.dateArray[1] = endDate;
    }
    this.setState({
      dateStorage: this.dateArray
    })

    if (this.state.dateStorage[0] !== undefined && this.state.dateStorage[1] !== undefined) {
      this.props.setSelectedDate(this.state.dateStorage[0], this.state.dateStorage[1]);
    }
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state;
    return (
      <div>
        <DateRangePicker
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
          startDateId="datepicker_start_home"
          endDateId="datepicker_end_home"
          startDatePlaceholderText="Start Date"
          endDatePlaceholderText="End Date"
        />
      </div>
    );
  }
}

AirbnbCalendar.propTypes = propTypes;
