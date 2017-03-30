const ApiKeys = require('../config/api-config');
const client = require('twilio')(ApiKeys.twilioAccountSid, ApiKeys.twilioAuthToken);
const twilio = require('twilio');
const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'), { multiArgs: true });

const askForZipCode = (number, name) => {
  client.messages.create({
    to: number,
    from: ApiKeys.twilioNumber,
    body: `Hey ${name.split(' ')[0]}, text me your zip code and I can forecast the weather. Just like this: 94102. Give it a try :)`
  }, (err, message) => {
    if (err) {
      console.log(err);
    } else {
      console.log(message.sid);
    }
  })
}

const getEachNum = (contacts, callback) => {
  for (let name of Object.keys(contacts)) {
    callback(contacts[name], name);
  }
}
getEachNum(ApiKeys.testContacts, askForZipCode);

const convertToFahrenheit = function (degrees) {
  return (degrees - 273) * 9 / 5 + 32;
}

const getWeatherForecast = (zipCode) => {
    return new Promise( (resolve, reject) => {
      request.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&appid=${ApiKeys.openWeatherApiKey}`, (err, res, body) => {
    let weatherData = JSON.parse(body);
    let weatherForecastList = weatherData.list;
    let message = `The next 3 days around ${zipCode} are looking... \n`;

    for (let i = 0; i < 20; i+=7) {
      let date = weatherForecastList[i].dt_txt.split('').splice(0, 10).join('');
      let temperature = convertToFahrenheit(weatherForecastList[i].main.temp);
      let weather = weatherForecastList[i].weather[0].main;
      message += date + ' ';
      message += Math.round(temperature) + '°F ';
      message += weather + '\n';
    }
    return resolve(message);
    })
  })
}

const cleanUserInputAsZipcode = (input) => {
  // TODO: fix or reject other form of invalid zip code inputs
  return input.split(' ').join('');  
}

exports.getWeatherForecast = getWeatherForecast;
exports.cleanUserInputAsZipcode = cleanUserInputAsZipcode;