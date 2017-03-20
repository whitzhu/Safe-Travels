import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const input = document.getElementById('pac-input');
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      this.setState({ text: place.formatted_address });
    });
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setDestination(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <form id="pac-container">
        <input className="form-control" id="pac-input" type="text" placeholder="Enter a destination" onChange={this.handleChange} style={{ width: 286, height: 50, backgroundColor: 'powderblue', fontSize: 14, lineHeight: 1.428 }} />
        <input
          id="search-input"
          type="submit"
          value="Submit" onClick={(event) => {
            this.handleSubmit(event);
            this.props.setLocationFromSearch(document.getElementById('pac-input'));
          }}
        />
      </form>
    );
  }
}

export default SearchBar;
