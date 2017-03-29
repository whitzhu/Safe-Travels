const ApiKeys = require('../config/api-config');
const client = require('twilio')(ApiKeys.twilioAccountSid, ApiKeys.twilioAuthToken);
const twilio = require('twilio');
const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'), { multiArgs: true });

const askForZipCode = (number, name) => {
  client.messages.create({
    to: number,
    from: ApiKeys.twilioNumber,
    body: 'Hey Gary, ' + 'text me your zip code and I can forecast the weather. Just like this: 94102. Give it a try :)'
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
// getEachNum(ApiKeys.testContacts, sendSillyQnAToNums);
getEachNum(ApiKeys.testContacts, askForZipCode);

const convertToFahrenheit = function (degrees) {
  return (degrees - 273) * 9 / 5 + 32;
}

const getWeatherForecast = (zipCode) => {
    return new Promise( (resolve, reject) => {
      request.get('http://api.openweathermap.org/data/2.5/forecast?zip=' + zipCode + ',us&appid=' + ApiKeys.openWeatherApiKey, (err, res, body) => {
    let weatherData = JSON.parse(body);
    let weatherForecastList = weatherData.list;
    let message = 'The next 3 days around ' + zipCode + ' are looking... \n';

    for (let i = 0; i < 20; i+=7) {
      let date = weatherForecastList[i].dt_txt.split('').splice(0, 10).join('');
      let temperature = convertToFahrenheit(weatherForecastList[i].main.temp);
      let weather = weatherForecastList[i].weather[0].main;
      message += date + ' ';
      message += Math.round(temperature) + '°F ';
      message += weather + '\n';
    }
    console.log('weatherForecast is here!!!!!')
    return resolve(message);
    })
  })
}

const cleanUserInputAsZipcode = (input) => {
  // take out spaces if any
  return input.split(' ').join('');  
}

// let sillyQuestionsAndAnswers = [
//   { Question: 'How do you fit an elephant inside a fridge?',
//     Answer: 'First, you open the door.\nSecond, you put it in.\nThird, you shut the door.' },
//   { Question: 'How do you fit a giraffe inside a fridge?',
//     Answer: 'First, you open the door.\nSecond, you take out the elephant.\nThird, you put the giraffe in.\nForth, you shut the door.' },
//   { Question: 'If King Lion asks to meet with all animals in the forest, which animal is absent?',
//     Answer: 'The giraffe.' }
// ]

// const sendSillyQnAToNums = (number, name) => {
//   client.messages.create({
//     to: number,
//     from: ApiKeys.twilioNumber,
//     body: name + ',\n\n' + sillyQuestionsAndAnswers[2].Question + '\n\n' +  sillyQuestionsAndAnswers[2].Answer
//   }, (err, message) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(message.sid);
//     }
//   })
// }

exports.getWeatherForecast = getWeatherForecast;
exports.cleanUserInputAsZipcode = cleanUserInputAsZipcode;