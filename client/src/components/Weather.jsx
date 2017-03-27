import React, { PropTypes } from 'react';
import Axios from 'axios';
import '../weather-icons.css';

const propTypes = {
  location: PropTypes.string.isRequired,
};

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
      <div className="weather">
        <h3 className="weather-title">{this.state.name}</h3>
        {this.state.sevenDayForecast.map((forecast, counter) => {
          const date = new Date();
          const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          const day = weekdays[(date.getDay() + counter) % 6];
          let icon;
          if (forecast.weather[0].main === 'Rain') {
            icon = 'wi wi-rain';
          } else if (forecast.weather[0].main === 'Clear') {
            icon = 'wi wi-day-sunny';
          } else if (forecast.weather[0].main === 'Clouds') {
            icon = 'wi wi-cloudy';
          } else if (forecast.weather[0].main === 'Snow') {
            icon = 'wi wi-snow';
          }
          return (
            <div className="col-md-1">
              <h4>{day}</h4>
              <h3>{forecast.temp.day}&deg;F</h3>
              <i className={icon}></i>
              <h4>{forecast.weather[0].description}</h4>
            </div>
          );
        })}
      </div>
    ) : (<div />);
  }
}

Weather.propTypes = propTypes;
