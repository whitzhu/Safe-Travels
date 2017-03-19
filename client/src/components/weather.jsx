import React from 'react';
import Axios from 'axios';


export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      temperatureInFahrenheit: '',
      temperatureLoaded: false,
    };
  }

  componentDidMount() {
    this.getWeather();
  }

  getWeather() {
    Axios.get('/weather', {
      params: {
        location: this.props.location,
      },
    })
      .then((response) => {
        this.setState({
          name: response.data.name,
          temperatureInFahrenheit: response.data.main.temp,
          temperatureLoaded: true,
        });
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  render() {
    return this.state.temperatureLoaded ? (
      <div>
        <h2>{this.state.name}</h2>
        <h3>{this.state.temperatureInFahrenheit} &deg;F</h3>
      </div>
    ) : (<div></div>);
  }
}
