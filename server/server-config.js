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
const ejs = require('ejs');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

const app = express();

app.set('views', `${__dirname}/../client/dist`);
app.set('view engine', 'ejs');
app.use(cookie('delicious cookie'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'could travel safe be true',
  resave: true,
  saveUninitialized: true,
}));
app.use(express.static(`${__dirname}/../client/dist`));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new Strategy({
  clientID: ApiKeys.facebookApiKey.clientID,
  clientSecret: ApiKeys.facebookApiKey.clientSecret,
  callbackURL: ApiKeys.facebookApiKey.callbackURL,
  profileFields: ['id', 'displayName', 'email'],
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
        }).save((err, newUser) => {
          if (err) {
            throw err;
          }
          done(null, newUser);
        });
      }
    });
  }));

// app.get('/', (req, res) => {
//   // if (!req.user) {
//   //   res.render('index.ejs', { isLoggedIn: false });
//   // } else {
//   //   res.render('index.ejs', { isLoggedIn: true });
//   // }
// });

app.get('/login/facebook',
  passport.authenticate('facebook', { scope: 'email' }));

app.get('/login/facebook/return/',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    res.cookie('isLoggedIn', true, { maxAge: 900000, httpOnly: false });
    res.redirect('/');
  });

app.get('/logout', (req, res) => {
  req.logout();
  res.cookie('isLoggedIn', false);
  res.redirect('/');
});

app.get('/crime', (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  const baseUrl = 'http://api.spotcrime.com/crimes.json';
  const key = 'privatekeyforspotcrimepublicusers-commercialuse-877.410.1607';
  const loc = { lat, lon };
  const radius = 0.1;

  const rOpt = {
    url: baseUrl,
    json: true,
    qs: {
      lat: loc.lat,
      lon: loc.lon,
      key,
      radius,
    },
  };

  request(rOpt, (error, response, body) => {
    if (error || !body) {
      console.error('Spot Crime API GET request error');
    } else {
      res.status(200).send(body.crimes);
    }
  });
});

app.get('/main', (req, res) => {
  res.redirect('/');
});

app.post('/yelp', (req, res) => {
  console.log('in post yelp');
  console.log(req.body);
  const location = encodeURIComponent(req.body.location);
  const query = encodeURIComponent(req.body.query);
  // only search price if provided
  const price = req.body.price.length ? `&price=${encodeURIComponent(req.body.price)}` : '';
  // default sort by rating
  const url = `https://api.yelp.com/v3/businesses/search?term=${query}&location=${location}${price}&sort_by=rating&limit=9`;
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
  const location = encodeURIComponent(req.query.location);
  const openWeatherApiKey = ApiKeys.openWeatherApiKey;
  const apiUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily';

  request({
    uri: apiUrl,
    method: 'GET',
    qs: {
      q: location,
      appid: openWeatherApiKey,
      units: 'imperial',
      cnt: 7,
    },
  }, (error, response, body) => {
    if (error) {
      console.error('Open Weather API GET request error');
    } else {
      console.log('Open Weather API GET request successful');
      res.status(200).send(body);
    }
  });
});

app.get('/savedTrips', (req, res) => {
  const user = req.user;
  if (user) {
    User.findOne({
      _id: user._id,
    }, (error, response) => {
      res.status(200).json(response.trips);
    });
  } else {
    res.sendStatus(400);
  }
});

app.post('/saveTrip', (req, res) => {
  const body = req.body;
  const name = body.destination.name;
  const address = body.destination.location.address1;
  const city = body.destination.location.city;
  const state = body.destination.location.state;
  const zipCode = body.destination.location.zip_code;
  const dateStart = body.startDate || null;
  const dateEnd = body.endDate || null;
  const imageUrl = body.destination.image_url;
  const informationUrl = body.destination.url;
  const trip = { name, address, city, state, zipCode, dateStart, dateEnd, imageUrl, informationUrl };
  const user = req.user;
  if (user) {
    const email = user.email;
    User.findByIdAndUpdate(
      user._id,
      { $addToSet: { trips: trip } },
      { safe: true, new: true, upsert: true },
      (err, result) => {
        res.sendStatus(201);
      });
  } else {
    res.sendStatus(400);
  }
});

app.get('/*', (req, res) => {
  res.redirect('/');
});

module.exports = app;
