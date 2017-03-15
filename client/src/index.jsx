import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  render() {
    return (<div>
      <h1>Hello World!</h1>
      <h1>Safe Travel</h1>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
