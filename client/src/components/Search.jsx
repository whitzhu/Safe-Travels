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
      //this.setState({ geoLocation: place.geometry.location });
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
    //geoLocation can only be retrieved when user select one of addresses from autocomplete list. if user submit an address they type in, we need to user google geocoding service to convert an address to lat and lon.
    if (Object.keys(this.state.geoLocation).length === 0 && this.state.geoLocation.constructor === Object) {
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: destination }, (results, status) => {
        if (status === 'OK') {
          //console.log(results[0].geometry.location);
          this.props.queryCrime(results[0].geometry.location);
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    } else {
      this.props.queryCrime(this.state.geoLocation);
    }
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
