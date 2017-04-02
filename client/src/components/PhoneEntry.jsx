import React, { PropTypes } from 'react';

const propTypes = {
  // storePhoneNumber: PropTypes.func.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  handleNumberChange: PropTypes.func.isRequired,
  handleNumberSubmit: PropTypes.func.isRequired
};

class PhoneEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Get Your Smart Travel Asistant</h1>
          <form onSubmit={this.props.handleNumberSubmit}>
            <input type="text" name="phoneNumber" value={this.props.phoneNumber}
            onChange={this.props.handleNumberChange}
            />
            <input type="submit" value="Build Your Itinerary" />
          </form>
        </div>
      </div>
    )
  }
}

PhoneEntry.propTypes = propTypes;
export default PhoneEntry;