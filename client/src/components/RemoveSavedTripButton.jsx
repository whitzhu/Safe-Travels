import React, { PropTypes } from 'react';

const propTypes = {
  trip: PropTypes.object.isRequired,
  removeSavedTrip: PropTypes.func.isRequired,
};

class RemoveSavedTripButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (!this.state.clicked) {
      this.props.removeSavedTrip(this.props.trip);
      this.setState({
        clicked: true,
      });
    }
  }

  render() {
    return (
      <div className="select-destination-button">
        <button href="#" className="btn btn-primary" onClick={this.onClick}>
          {this.state.clicked ? 'Removed!' : 'Remove Trip?'}
        </button>
      </div>);
  }
}

RemoveSavedTripButton.propTypes = propTypes;
export default RemoveSavedTripButton;
