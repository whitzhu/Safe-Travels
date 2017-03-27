import React, { PropTypes } from 'react';
import crimeImg from '../img/security.png';

const propTypes = {
  geoLocation: PropTypes.object.isRequired,
  crimeData: PropTypes.array.isRequired,
  mapDestinations: PropTypes.array.isRequired,
};

const defaultProps = {
  mapDestinations: [],
};

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      travelMode: 'DRIVING',
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const directionsDisplay = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService;
    this.map = this.createMap();
    directionsDisplay.setMap(this.map);

    this.createMarkers(this.map);
    this.calcRoute(directionsService, directionsDisplay);
  }

  onChange(event) {
    this.setState({
      travelMode: event.target.value,
    });
  }

  createMap() {
    const geoLocation = new google.maps.LatLng(this.props.geoLocation.lat, this.props.geoLocation.lng);
    const mapOptions = {
      zoom: 14,
      center: geoLocation,
    }
    return new google.maps.Map(this.refs.map, mapOptions);
  }

  calcRoute(directionsService, directionsDisplay) {
    if (this.props.mapDestinations && this.props.mapDestinations.length > 1) {
      const destinations = [];
      this.props.mapDestinations.forEach((value) => {
        destinations.push({
          location: value.location.display_address[0] + value.location.display_address[1],
          stopover: true,
        });
      });

      const directionsRequest = {
        origin: destinations[0].location,
        destination: destinations[destinations.length - 1].location,
        waypoints: destinations.slice(1, destinations.length - 1),

        optimizeWaypoints: true,
        provideRouteAlternatives: false,
        travelMode: this.state.travelMode,
        drivingOptions: {
          departureTime: new Date, 
          trafficModel: 'pessimistic',
        },
        unitSystem: google.maps.UnitSystem.IMPERIAL,
      };

      directionsService.route(directionsRequest, (result, status) => {
        if (status == 'OK') {
          directionsDisplay.setDirections(result);
        } else {
          console.log(status);
          console.log('there was an error regarding the directions service');
        }
      });
    }
  }

  createMarkers(map) {
    const pinIcon = new google.maps.MarkerImage(
        crimeImg,
        null, /* size is determined at runtime */
        null, /* origin is 0,0 */
        null, /* anchor is bottom center of the scaled image */
        new google.maps.Size(40, 40),
    );
    if (this.props.crimeData.length) {
      this.props.crimeData.forEach((value) => {
        const infowindow = new google.maps.InfoWindow({
          content: `<div>${value.type}</div>`,
        });
        const marker = new google.maps.Marker({
          animation: google.maps.Animation.DROP,
          position: new google.maps.LatLng(value.lat, value.lon),
          map,
          icon: pinIcon,
        });
        google.maps.event.addListener(marker, 'mouseover', () => {
          infowindow.open(map, marker);
          setTimeout(() => { infowindow.close(); }, '1500');
        });
      });
    }
  }

  render() {
    return (
      <div className="google-map">
        <div ref="map" className="map" />
      </div>);
  }
}

GoogleMap.propTypes = propTypes;
GoogleMap.defaultProps = defaultProps;
export default GoogleMap;
