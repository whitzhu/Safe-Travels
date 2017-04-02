import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from 'axios';
import 'react-dates/lib/css/_datepicker.css';
import './style.css';
import Entrance from './components/Entrance';
import Main from './components/Main';
import Login from './components/Login';
import PhoneEntry from './components/PhoneEntry';
import NavbarInstance from './components/NavbarInstance';
import Profile from './components/Profile';
import PlanTrip from './components/PlanTrip';
import GoogleMap from './components/GoogleMap';
import ItinerarySideBar from './components/ItinerarySideBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      location: '',
      geoLocation: {},
      attractionResults: [],
      restaurantResults: [],
      crimeData: {},
      isSent: false,
      savedTrips: [],
      yelpPrice: '3',
      yelpStyle: 'casual',
      mapDestinations: [],
      shows: [],
      hotels:[],
      phoneNumber: '',
      startDate: '',
      endDate: '',
      sevenDayForecast: [],
      tripEntryContainer: [],
      calCol: [
        { date: new Date(), tripEntry:[]},
        { date: new Date(), tripEntry:[]},
        { date: new Date(), tripEntry:[]},
        { date: new Date(), tripEntry:[]},
        { date: new Date(), tripEntry:[]},
        { date: new Date(), tripEntry:[]},
      ],
    };

    this.startDate = null;
    this.endDate = null;
    this.mapDestinations = [];
    this.setLocationFromSearch = this.setLocationFromSearch.bind(this);
    this.setGeoLocationFromSearch = this.setGeoLocationFromSearch.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.queryYelp = this.queryYelp.bind(this);
    this.queryCrime = this.queryCrime.bind(this);
    // this.queryShows = this.queryShows.bind(this);
    this.setSelectedDate = this.setSelectedDate.bind(this);
    this.handleIsSent = this.handleIsSent.bind(this);
    this.getSavedTrips = this.getSavedTrips.bind(this);
    this.selectDestination = this.selectDestination.bind(this);
    this.handleIsSentFalse = this.handleIsSentFalse.bind(this);
    this.removeSavedTrip = this.removeSavedTrip.bind(this);
    this.setMapDestinations = this.setMapDestinations.bind(this);
    this.storePhoneNumber = this.storePhoneNumber.bind(this);
    this.queryHotels = this.queryHotels.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleNumberSubmit = this.handleNumberSubmit.bind(this);
    this.handleSendItinerary = this.handleSendItinerary.bind(this);
    this.updateCalEntry = this.updateCalEntry.bind(this);
    this.removeSavedTripState = this.removeSavedTripState.bind(this);
    this.removeCalEntry = this.removeCalEntry.bind(this);
    this.savetripEntryContainer = this.savetripEntryContainer.bind(this);
  }

  componentDidMount(){
    this.queryShows();
    this.queryHotels();
  }

  login() {
    Axios.get('/login/facebook')
    .then((res) => {
    })
    .catch( error => console.log(error));
  }

  logout() {
    Axios.get('/logout')
    .then((res) => {
    })
    .catch( error => console.log(error));
  }

  login() {
    Axios.get('/login/facebook')
    .then((res) => {
    })
    .catch( error => console.log(error));
  }

  logout() {
    Axios.get('/logout')
    .then((res) => {
    })
    .catch( error => console.log(error));
  }

  login() {
    Axios.get('/login/facebook')
    .then((res) => {
    })
    .catch( error => console.log(error));
  }

  logout() {
    Axios.get('/logout')
    .then((res) => {
    })
    .catch( error => console.log(error));
  }

  savetripEntryContainer(trip) {
    this.setState({
      tripEntryContainer: this.state.tripEntryContainer.concat([trip])
    });
    console.log('======savetripEntryContainer RESULT tripEntryContainer', this.state.tripEntryContainer);
  }

  removeSavedTrip(trip) {
    return Axios.post('/removeSavedTrip', trip)
      .then((res) => {
        console.log('Correctly removed trip');
      })
      .catch( error => console.log(error));
  }

  removeSavedTripState(id) {
    const newSavedTrips = this.state.savedTrips;
    newSavedTrips.splice(id,1);
    this.setState({
      savedTrips: newSavedTrips
    });
  }

  getSavedTrips() {
    Axios.get('/savedTrips')
    .then((res) => {
      this.setState({ savedTrips: res.data });
    });
  }

  setLocationFromSearch(locationFromSearch) {
    this.setState({
      location: locationFromSearch,
    });
  }

  setGeoLocationFromSearch(geoLocationFromSearch) {
    this.setState({ geoLocation: {
      lat: geoLocationFromSearch.lat(),
      lng: geoLocationFromSearch.lng(),
    } });
  }

  setMapDestinations() {
    this.setState({
      mapDestinations: this.mapDestinations,
    });
  }

  setSelectedDate(startDate, endDate) {
    startDate = JSON.stringify(startDate).split('').splice(1, 10).join('');
    endDate = JSON.stringify(endDate).split('').splice(1, 10).join('');
    this.setState({ startDate: startDate, endDate: endDate });
    console.log('hereee', this.state.startDate);
    console.log('hereee', this.state.endDate);
  }

  handleNumberChange(event) {
    let phoneNumber = event.target.value;
    this.setState({ phoneNumber: phoneNumber });
  }

  storePhoneNumber(number) {
    console.log('Within indexJSX: storePhoneNumber', this.state.phoneNumber);
    Axios.post('/storePhoneNumber', {
        phoneNumber: number
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleNumberSubmit(number) {
    console.log('Within indexJSX handleNumberSubmit:', number);
    this.setState({
      phoneNumber: number
    })
    console.log('state phonenumber:', this.state.phoneNumber)
    this.storePhoneNumber(number);
  }

  selectDestination(yelpLocation) {
    this.mapDestinations = this.mapDestinations.concat(yelpLocation);
  }

  handleIsSent() {
    this.setState({ isSent: true });
  }

  handleIsSentFalse() {
    this.setState({ isSent: false });
  }

  handleSendItinerary(e) {
    e.preventDefault();
    Axios.post('/sendItinerary', {
      message: this.state
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }

  queryCrime(geoLocation) {
    return Axios.get('/crime', {
      params: {
        lat: geoLocation.lat(),
        lon: geoLocation.lng(),
      },
    })
    .then((response) => {
      console.log('success fetching crime spots from server');
      this.setState({ crimeData: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  // queryShows(showQuery){
  //   showQuery.query = showQuery.query || 'Events';
  //   showQuery.location = showQuery.location || this.state.location;
  //   return Axios.post('/shows', showQuery)
  //   .then((shows) => {
  //     console.log('success fetching shows/events from server', shows);
  //     this.setState({restaurantResults: shows})
  //   })
  //   .catch((error) => {
  //       console.log(error);
  //   })
  // }
  queryHotels() {
    let dummyData = {
      location: 'San Francisco'
    }
    return Axios.post('/hotels', dummyData)
    .then((listings) => {
      console.log('success fetching hotel data from server');
      this.setState({hotels: listings.data})
    })
    .catch((error) => {
      console.log(error);
    })
  }

  queryYelp(search) {
    const statePrice = search.price ? search.price : '3';
    const stateStyle = search.style ? search.style : 'casual';
    const yelpRestaurantQuery = {
      location: search.destination || this.state.location || 'san francisco',

      // default query -- add on based on user input after initial list.
      // default to blank price for first search
      query: search.style ? search.style : this.state.yelpStyle,
      price: search.price ? search.price : '',
    };
    return Axios.post('/yelp', yelpRestaurantQuery)
      .then((restaurants) => {
        console.log('restaurants query to yelp provides:', restaurants.data);
        // must query attractions to get attractions
        // reset price prior to attractions query
        const yelpAttractionQuery = {
          location: yelpRestaurantQuery.location,
          query: 'tourist attractions',
          price: '',
        };
        return Axios.post('/yelp', yelpAttractionQuery)
          .then((attractions) => {
            console.log('success fetching attractions from server', attractions.data);
            this.setState({
              attractionResults: attractions.data,
              restaurantResults: restaurants.data,
              yelpPrice: statePrice,
              yelpStyle: stateStyle,
            });
          })
      })
      .catch(error => console.log(error));
  }

  updateCalEntry(tripEntry, id) {
    let newCalCol = this.state.calCol;
    newCalCol[id].tripEntry = newCalCol[id].tripEntry.concat([tripEntry]);
    this.setState({
      calCol: newCalCol
    });
  }

  removeCalEntry(entryId, tripIndex) {
    console.log('=====entryId', entryId, '=====tripIndex', tripIndex);
    let newCalCol = this.state.calCol;
    console.log("newCalCol[entryId].tripEntry-======",newCalCol[entryId].tripEntry );
    newCalCol[entryId].tripEntry.splice(tripIndex, 1);
    this.setState({
      calCol: newCalCol
    });
  }

  upDate(destination) {
    return Axios.post('/saveTrip', {
      destination,
      startDate: this.props.startDate,
      endDate: this.props.endDate,
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <Router>
        <div>
          <NavbarInstance
            location={this.state.location}
            getSavedTrips={this.getSavedTrips}
            geoLocation={this.state.geoLocation}
            login={this.login}
            logout={this.logout}
            handleIsSentFalse={this.handleIsSentFalse}
            setMapDestinations={this.setMapDestinations}
          />
          <Route
            exact path="/" component={() =>
            (<Entrance
              setLocationFromSearch={this.setLocationFromSearch}
              setGeoLocationFromSearch={this.setGeoLocationFromSearch}
              queryYelp={this.queryYelp}
              queryCrime={this.queryCrime}
              location={this.state.location}
              setSelectedDate={this.setSelectedDate}
              getlocation={this.state.geoLocation}
              isSent={this.state.isSent}
              handleIsSent={this.handleIsSent}
            />)}
          />
          <Route
            path="/main"
            component={() => (
              <Main
                attractionResults={this.state.attractionResults}
                restaurantResults={this.state.restaurantResults}
                geoLocation={this.state.geoLocation}
                crimeData={this.state.crimeData}
                location={this.state.location}
                queryYelp={this.queryYelp}
                startDate={this.startDate}
                endDate={this.endDate}
                yelpPrice={this.state.yelpPrice}
                yelpStyle={this.state.yelpStyle}
                selectDestination={this.selectDestination}
                handleIsSentFalse={this.handleIsSentFalse}
                queryShows={this.queryShows}
                showsData={this.state.shows}
                getSevenDayForecast={this.getSevenDayForecast}
              />)}
          />
          <Route path="/login" component={Login} />
          <Route
            path="/profile"
            component={() => (
              <Profile
                savedTrips={this.state.savedTrips}
                removeSavedTrip={this.removeSavedTrip}
              />)}
          />
          <Route
            path="/plan-trip"
            component={() => (
              <PlanTrip
                calCol={this.state.calCol}
                savedTrips={this.state.savedTrips}
                savetripEntryContainer={this.savetripEntryContainer}
                removeSavedTrip={this.removeSavedTrip}
                removeSavedTripState={this.removeSavedTripState}
                updateCalEntry={this.updateCalEntry}
                removeCalEntry={this.removeCalEntry}
              />)}
          />
          <Route
            path="/entry"
            component={() => (
              <PhoneEntry
                // storePhoneNumber={this.storePhoneNumber}
                phoneNumber={this.state.phoneNumber}
                handleNumberChange={this.handleNumberChange}
                handleNumberSubmit={this.handleNumberSubmit}
              />
            )}
          />
          <Route
            path="/drag"
            component={() => (
              <DragNdrop
              />
            )}
          />
          <Route
            path="/map"
            component={() =>
              (<GoogleMap
                savedTrips={this.state.savedTrips}
                geoLocation={this.state.geoLocation}
                crimeData={this.state.crimeData}
                mapDestinations={this.state.mapDestinations}
              />)
            }
          />
          <Route
            path="/itinerary"
            component={() =>
              (<ItinerarySideBar
                location={this.state.location}
                attractions={this.state.attractionResults}
                restaurants={this.state.restaurantResults}
                savedTrips={this.state.savedTrips}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                handleSendItinerary={this.handleSendItinerary}
              />)
            }
          />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
