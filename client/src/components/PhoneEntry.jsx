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
    this.state = {
      phoneNumber: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(event) {
  this.setState({ phoneNumber: event.target.value });
  // this.props.handleNumberChange
}

handleSubmit() {
  console.log('...PhoneEntry handleSubmit called', this.state.phoneNumber);
  this.props.handleNumberSubmit(this.state.phoneNumber)
}

  render() {
    return (
      <div>
        <div className="container">
          <h1>Get Your Smart Travel Asistant</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.phoneNumber}
            onChange={this.handleChange}
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