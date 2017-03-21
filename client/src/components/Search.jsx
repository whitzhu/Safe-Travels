import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      geoLocation: {},
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const input = document.getElementById('pac-input');
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      this.setState({ geoLocation: place.geometry.location });
      // this.setState({ text: place.formatted_address });
    });
  }

  // handleChange(event) {
  //   this.setState({ text: event.target.value });
  // }

  handleSubmit(event) {
    const destination = document.getElementById('pac-input').value;
    event.preventDefault();
    this.props.setLocationFromSearch(destination);
    this.props.setGeoLocationFromSearch(this.state.geoLocation);
    this.props.queryYelp(destination);
    this.props.queryCrime(this.state.geoLocation);
    this.setState({ text: '' });
  }

  render() {
    return (
      <form
        id="pac-container"
        onSubmit={event =>
          this.handleSubmit(event)
        }
      >
        <input
          id="pac-input"
          type="text"
          placeholder="Enter a destination"
          /*onChange={this.handleChange}*/ 
          style={{ width: 150, height: 25, backgroundColor: 'powderblue', fontSize: 15 }}
        />
        <input
          id="search-input"
          type="submit"
          value="Submit" onClick={event =>
            this.handleSubmit(event)
          }
        />
      </form>
    );
  }
}

export default SearchBar;
