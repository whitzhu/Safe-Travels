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
    const sanfrancisco = new google.maps.LatLng(37.774546, -122.433523);
    const mapOptions = {
      zoom: 14,
      center: sanfrancisco,
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
    /*
      var data = [];
      this.crimeData.forEach(value => 
        data.push(new google.maps.LatLng(value.lat, value.lng))
      });
    */
    return [
      new google.maps.LatLng(37.782551, -122.445368),
      new google.maps.LatLng(37.782745, -122.444586),
      new google.maps.LatLng(37.782842, -122.443688),
      new google.maps.LatLng(37.782919, -122.442815),
      new google.maps.LatLng(37.782992, -122.442112),
    ];
  }

  render() {
    return (<div className="google-map">  
      <div ref="map" className="map">
      </div>
    </div>);
  }
}

export default GoogleMap;
