const bodyParser = require('body-parser');
const express = require('express');
const https = require('https');
const request = require('request');

const database = require('./../database/index');
const handler = require('./../lib/utility');
const ApiKeys = require('../config/api-config.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/../client/dist`));
app.get('/main', (req, res) => {
  res.redirect('/');
});
app.get('/login', (req, res) => {
  res.redirect('/');
});
app.post('/yelp', (req, res) => {
  console.log(req.body);
  const location = encodeURIComponent(req.body.location);
  const query = encodeURIComponent(req.body.query);
  const url = `https://api.yelp.com/v3/businesses/search?term=${query}&location=${location}`;

  request({
    uri: url,
    headers: {
      Authorization: `Bearer ${ApiKeys.yelpApiToken.token}`,
    },
    method: 'GET',
  }, (error, response, body) => {
    if (error) {
      console.error('Yelp GET request error');
    } else {
      console.log('Yelp GET request successful');
      res.status(200).send(body);
    }
  });
});
app.get('/weather', (req, res) => {
  const location = req.query.location;
  const openWeatherApiKey = ApiKeys.openWeatherApiKey;
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${openWeatherApiKey}&units=imperial`;

  request({
    uri: apiUrl,
    method: 'GET',
  }, (error, response, body) => {
    if (error) {
      console.error('Open Weather API GET request error');
    } else {
      console.log('Open Weather API GET request successful');
      res.status(200).send(body);
    }
  });
});

module.exports = app;
