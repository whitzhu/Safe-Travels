import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search.jsx';

class Entrance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: null,
    };
    this.setDestination = this.setDestination.bind(this);
  }

  setDestination(string) {
    this.setState({ destination: string });
  }

  componentDidUpdate() {

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
      </div>
    );
  }
}

export default Entrance;
