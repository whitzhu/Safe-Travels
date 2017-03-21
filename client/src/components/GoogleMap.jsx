import React from 'react';

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.map = this.createMap();
    console.log(this.map);
    const directionsDisplay = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService;
    directionsDisplay.setMap(this.map);

    // calcRoute(directionsService, directionsDisplay);
    // Add event handler and pass in display and service**
    // document.getElementById('end').addEventListener('change', () => {
    //   this.calcRoute(directionsService, directionsDisplay);
    // });

    // NEED VISUALIZATION LIBRARY IN THE INDEX HTML TAG
    const heatmap = new google.maps.visualization.HeatmapLayer({
      data: this.getPoints(),
      map: this.map
    });
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

  // calcRoute(directionsService, directionsDisplay) {
  //   const sampleRequest = {
  //     origin: 'Los Angeles, CA',
  //     destination: 'San Francisco, CA',
  //     waypoints: [
  //       {
  //         location: 'San Jose, CA',
  //         // stop over adds a marker
  //         stopover: true
  //       }, {
  //         location: 'Santa Clarita, CA',
  //         stopover: true
  //       }],
  //     provideRouteAlternatives: false,
  //     travelMode: 'DRIVING',
  //     drivingOptions: {
  //       departureTime: new Date, // ( now, or future date ),
  //       trafficModel: 'pessimistic'
  //     },
  //     unitSystem: google.maps.UnitSystem.IMPERIAL,
  //   };

  //   // request is literally the route directions you want 
  //   directionsService.route(sampleRequest, (result, status) => {
  //     if (status == 'OK') {
  //       directionsDisplay.setDirections(result);
  //     } else {
  //       console.log(status);
  //       console.log('there was an error');
  //     }
  //   });
  // }

  getPoints() {
    // converts into google.maps with latitudes and longitudes
    var mapCrimeData = [];
    this.props.crimeData.forEach(value => 
      mapCrimeData.push(new google.maps.LatLng(value.lat, value.lon)),
    );
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
