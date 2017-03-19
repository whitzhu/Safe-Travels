import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import $ from 'jquery';
import Entrance from './components/Entrance';
import Main from './components/Main';
import Login from './components/Login';
import createHistory from '../../node_modules/history/createBrowserHistory';
import './css/calendar.css';

// import dummyYelpAttractionData from '../dummyYelpAttractionData.js';
// import dummyYelpRestaurantData from '../dummyYelpRestaurantData.js';

const history = createHistory();


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // attractionsResults: dummyYelpAttractionData,
      // restaurantsResults: dummyYelpRestaurantData,
      items: [],
      location: '',
    };
  }

  setLocationFromSearch(locationFromSearch) {
    this.setState({
      location: locationFromSearch.value,
    });
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Route
            path="/" component={() =>
            (<Entrance setLocationFromSearch={this.setLocationFromSearch.bind(this)} />)}
          />
          <Route path="/main" component={() => (<Main location={this.state.location} />)} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
