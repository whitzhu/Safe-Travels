// TODO: Gary to ask Erik how to use request.getAsync correctly
// const getWeatherForecast = (zipCode) => {
//   return request.getAsync({
//             url: `http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&appid=${ApiKeys.openWeatherApiKey}`,
//             method: 'GET'
//           })
//           .then((body) => {
//             console.log('what is the body?', body);
//             let weatherData = JSON.parse(body);
//             let weatherForecastList = weatherData.list;
//             let message = `The next 3 days around ${zipCode} are looking... \n`;

//             for (let i = 0; i < 20; i+=7) {
//               let date = weatherForecastList[i].dt_txt.split('').splice(0, 10).join('');
//               let temperature = convertToFahrenheit(weatherForecastList[i].main.temp);
//               let weather = weatherForecastList[i].weather[0].main;
//               message += date + ' ';
//               message += Math.round(temperature) + '°F ';
//               message += weather + '\n';
//               console.log('what is the message?', message);
//               return message;
//             }
//           })
// }
