import './css/calendar.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import $ from 'jquery';  
import Entrance from './components/entrance.jsx';
import main from './components/main.jsx';
import login from './components/login.jsx';
import createHistory from '../../node_modules/history/createBrowserHistory';
import './css/calendar.css';

// import dummyYelpAttractionData from '../dummyYelpAttractionData.js';
// import dummyYelpRestaurantData from '../dummyYelpRestaurantData.js';

const history = createHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   attractionsResults: dummyYelpAttractionData,
    //   restaurantsResults: dummyYelpRestaurantData,
    // };
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/" component={Entrance} />
          <Route path="/main" component={main} />
          <Route path="/login" component={login} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
