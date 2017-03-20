const bodyParser = require('body-parser');
const express = require('express');
const https = require('https');
const request = require('request');
const database = require('./../database/index');
const User = require('./../database/models/user');
const handler = require('./../lib/utility');
const ApiKeys = require('../config/api-config');
const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const cookie = require('cookie-parser');
const session = require('express-session');

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

const app = express();

app.use(cookie("delicious cookie"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'could travel safe be true', resave: true, saveUninitialized: true }));
app.use(express.static(`${__dirname}/../client/dist`));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new Strategy({
  clientID: ApiKeys.facebookApiKey.clientID,
  clientSecret: ApiKeys.facebookApiKey.clientSecret,
  callbackURL: ApiKeys.facebookApiKey.callbackURL,
  profileFields: ['id', 'displayName', 'email']
},
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ userID: profile.id }, (err, oldUser) => {
      if (oldUser) {
        done(null, oldUser);
      } else {
        const newUser = new User({
          userID: profile.id,
          username: profile.displayName,
          email: profile.emails[0].value,
          trip: null
        }).save((err, newUser) => {
          if (err) {
            throw err;
          }
          done(null, newUser);
        });
      }
    });
  }));

app.get('/login/facebook',
  passport.authenticate('facebook', { scope: 'email' }));

app.get('/login/facebook/return',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  });

app.get('/main', (req, res) => {
  res.redirect('/');
});

app.get('/login', (req, res) => {
  res.redirect('/');
});

app.get('/logout', (req, res) => {
  req.logout();
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

app.get('/yelp', (req, res) => {
  const location = encodeURIComponent(req.query.location);
  const query = encodeURIComponent(req.query.query);
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
