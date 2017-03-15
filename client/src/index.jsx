import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import $ from 'jquery';
import entrance from './components/entrance.jsx';
import main from './components/main.jsx';
import login from './components/login.jsx';
import createHistory from '../../node_modules/history/createBrowserHistory';

const history = createHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/" component={entrance} />
          <Route path="/main" component={main} />
          <Route path="/login" component={login} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
