const ApiKeys = require('../config/api-config');
const client = require('twilio')(ApiKeys.twilioAccountSid, ApiKeys.twilioAuthToken);
const twilio = require('twilio');
const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'), { multiArgs: true });

const askForZipCode = (number, name) => {
  client.messages.create({
    to: number,
    from: ApiKeys.twilioNumber,
    body: `Hey ${name.split(' ')[0]}, if you want weather information, please text me your zipcode like so : 94102, but if you want shows information, please let me know of your requested city, just like: San Francisco. Give it a try!`
  }, (err, message) => {
    if (err) {
      console.log(err);
    } else {
      console.log(message.sid);
    }
  })
}

const askForCity = (number, name) => {
  client.messages.create({
    to: number,
    from: ApiKeys.twilioNumber,
    body: `Hey ${name.split(' ')[0]}, please respond with the city name and I can give you the best local shows. Just like this: San Francisco. Give it a try :)`
  }, (err, message) => {
    if (err) {
      throw err;
    } else (
      console.log(message.sid))
  })
}


const getEachNum = (contacts, callback) => {
  for (let name of Object.keys(contacts)) {
    callback(contacts[name], name);
  }
}

getEachNum(ApiKeys.testContacts, askForZipCode);
// getEachNum(ApiKeys.testContacts, askForCity);

const convertToFahrenheit = function (degrees) {
  return (degrees - 273) * 9 / 5 + 32;
}


const getShows = (city) => {
  let eventsLink = `https://www.eventbriteapi.com/v3/events/search/?sort_by=best&location.address=${city}&categories=103&token=${ApiKeys.eventBriteToken}`;
  return new Promise ( (resolve, reject) => {
    request({
      uri: eventsLink,
      method: 'GET',
    }, (error,response,body) => {
      let shows = `These are the hottest shows in ${city}: \n`;
      events = JSON.parse(body).events;
      console.log(events);
      if (error) {
        throw error;
      } else {
        for (let i = 0; i < 5; i++) {
          let name = events[i].name.text;
          let date = events[i].start.local.slice(0, 10);
          shows += name + ' ' + '\n' + 'Date: ' + date + '\n' + '\n'
        }
      }
    return resolve(shows);
    })   
  }) 
}

const getWeatherForecast = (zipCode) => {
    return new Promise( (resolve, reject) => {
      request.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&appid=${ApiKeys.openWeatherApiKey}`, (err, res, body) => {
    const weatherData = JSON.parse(body);
    const weatherForecastList = weatherData.list;
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
exports.getShows = getShows;
