import React, { PropTypes } from 'react';

const propTypes = {
  // storePhoneNumbers: PropTypes.func.isRequired
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
          <form>
            <input type="text" />
            <input type="submit" value="Build Your Itinerary" />
          </form>
        </div>
      </div>
    )
  }
}

PhoneEntry.propTypes = propTypes;
export default PhoneEntry;