import React, { ProTypes }from 'react';
import SavedTrip from './SavedTrip';

class Plan extends React.Component {
  constructor(props){
    super(props);
    console.log("==========savedTrips", this.props.savedTrips);
  }

  render() {
    return (
      <h1>Hello</h1>
    )
  }
}

export default Plan;
