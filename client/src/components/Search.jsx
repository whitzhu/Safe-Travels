import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const input = document.getElementById('pac-input');
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
    });
  }

  handleSubmit(event) {
    const destination = document.getElementById('pac-input').value;
    event.preventDefault();
    // can refactor these two calls to use lat/lng
    this.props.setLocationFromSearch(destination);
    this.props.queryYelp(destination);

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: destination }, (results, status) => {
      if (status === 'OK') {
        this.props.queryCrime(results[0].geometry.location);
        this.props.setGeoLocationFromSearch(results[0].geometry.location);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });

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
        />
      </form>
    );
  }
}

export default SearchBar;
