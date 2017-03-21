import React from 'react';

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const directionsDisplay = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService;
    this.map = this.createMap();
    directionsDisplay.setMap(this.map);
    console.log(this.map);

    this.calcRoute(directionsService, directionsDisplay);
    // Add event handler and pass in display and service**
    // document.getElementById('end').addEventListener('change', () => {
    //   this.calcRoute(directionsService, directionsDisplay);
    // });

    // NEED VISUALIZATION LIBRARY IN THE INDEX HTML TAG
    const heatmap = new google.maps.visualization.HeatmapLayer({
      data: this.getPoints(),
      map: this.map
    });
    const gradient = [
      'rgba(0, 255, 255, 0)',
      'rgba(0, 255, 255, 1)',
      'rgba(0, 191, 255, 1)',
      'rgba(0, 127, 255, 1)',
      'rgba(0, 63, 255, 1)',
      'rgba(0, 0, 255, 1)',
      'rgba(0, 0, 223, 1)',
      'rgba(0, 0, 191, 1)',
      'rgba(0, 0, 159, 1)',
      'rgba(0, 0, 127, 1)',
      'rgba(63, 0, 91, 1)',
      'rgba(127, 0, 63, 1)',
      'rgba(191, 0, 31, 1)',
      'rgba(255, 0, 0, 1)'
    ]
    heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
  }

  createMap() {
    // LatLng data should be passed in as properties
    const geoLocation = new google.maps.LatLng(this.props.geoLocation.lat, this.props.geoLocation.lng);
    const mapOptions = {
      zoom: 14,
      center: geoLocation,
    }
    return new google.maps.Map(this.refs.map, mapOptions);
  }

  calcRoute(directionsService, directionsDisplay) {
    if (this.props.mapDestinations.length > 1) {
      const destinations = []
      this.props.mapDestinations.forEach((value) => {
        destinations.push({
          location: value.location.display_address[0] + value.location.display_address[1],
          stopover: true,
        });
      });
      const sampleRequest = {
        origin: destinations[0].location,
        destination: destinations[destinations.length - 1].location,
        waypoints: destinations.slice(1, destinations.length - 1),
        provideRouteAlternatives: false,
        travelMode: 'DRIVING',
        drivingOptions: {
          departureTime: new Date, // ( now, or future date ),
          trafficModel: 'pessimistic'
        },
        unitSystem: google.maps.UnitSystem.IMPERIAL,
      };

      // request is literally the route directions you want 
      directionsService.route(sampleRequest, (result, status) => {
        if (status == 'OK') {
          directionsDisplay.setDirections(result);
        } else {
          console.log(status);
          console.log('there was an error');
        }
      });
    }
  }

  getPoints() {
    // converts into google.maps with latitudes and longitudes
    const mapCrimeData = [];
    if (this.props.crimeData.length) {
      this.props.crimeData.forEach(value => 
        mapCrimeData.push(new google.maps.LatLng(value.lat, value.lon)),
      );
    }
    return mapCrimeData;
  }

  render() {
    return (<div className="google-map">  
      <div ref="map" className="map">
      </div>
    </div>);
  }
}

export default GoogleMap;
