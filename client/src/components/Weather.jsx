import React from 'react';
import Axios from 'axios';


export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sevenDayForecast: [],
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
        console.log('weather======', response);
        this.setState({
          name: `${response.data.city.name}, ${response.data.city.country}`,
          sevenDayForecast: response.data.list,
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
          {this.state.sevenDayForecast.map((forecast, counter) => {
            const date = new Date();
            const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const day = weekdays[(date.getDay() + counter) % 6];
            return (
              <div className="col-md-1">
                <h4>{day}</h4>
                <h3>{forecast.temp.day}&deg;F</h3>
                <h3>{forecast.weather[0].main}</h3>
                <h4>{forecast.weather[0].description}</h4>
              </div>
            );
          })}
      </div>
    ) : (<div />);
  }
}
