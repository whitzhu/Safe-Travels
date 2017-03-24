import React, { PropTypes } from 'react';

const propTypes = {
  destination: PropTypes.object.isRequired,
  saveDestination: PropTypes.func.isRequired,
  selectDestination: PropTypes.func.isRequired,
};

class SelectDestinationButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addToList: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (!this.state.addToList) {
      this.props.saveDestination(this.props.destination);
      this.props.selectDestination(this.props.destination);
      this.setState({
        addToList: true,
      });
    }
  }

  render() {
    return (
      <div className="select-destination-button">
        <button href="#" className="btn btn-primary" onClick={this.onClick}>
          {this.state.addToList ? 'Added!' : 'Add to Trip!'}
        </button>
      </div>);
  }
}

SelectDestinationButton.propTypes = propTypes;
export default SelectDestinationButton;
