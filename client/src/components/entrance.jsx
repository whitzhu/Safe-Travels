import React from 'react';
import { Link } from 'react-router-dom';
import Calendar from './calendar.jsx';
import SearchBar from './search.jsx';

class Entrance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: null,
      selectedDate: null,
    };
    this.setDestination = this.setDestination.bind(this);
    this.setSelectedDate = this.setSelectedDate.bind(this);
  }

  setDestination(dest) {
    this.setState({ destination: dest });
  }

  setSelectedDate(date) {
    this.setState({ selectedDate: date });
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h1>Safe Travel</h1>
        <p> want to travel safe? </p>
        <SearchBar setDestination={this.setDestination} />
        <div>
          <Link to="/main">public</Link>
        </div>
        <div>
          <Link to="/login">login</Link>
        </div>
        <Calendar className="calendar" setSelectedDate={this.setSelectedDate} />
      </div>
    );
  }
}

export default Entrance;
