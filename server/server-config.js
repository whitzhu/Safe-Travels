const bodyParser = require('body-parser');
const express = require('express');
const https = require('https');
const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'), { multiArgs: true });
const database = require('./../database/index');
const User = require('./../database/models/user');
const twilio = require('twilio');
const ApiKeys = require('../config/api-config');
const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const cookie = require('cookie-parser');
const session = require('express-session');
const zip = require('./zip');
const util = require('./util.js');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
const app = express();

app.use(cookie('deserializeUsercious cookie'));
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

app.get('/login/facebook',
  passport.authenticate('facebook', { authType: 'reauthenticate', scope: 'email' }));

app.get('/login/facebook/return',
  passport.authenticate('facebook', { authType: 'reauthenticate', failureRedirect: '/login' }),
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
      radius
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
  const price = req.body.price.length ? `&price=${encodeURIComponent(req.body.price)}` : '';


  util.yelpSearch(location, query, price)
    .then( (businesses) => {
      console.log('yelpSearch success')
      res.status(200).send(businesses);
    })
    .catch(err => console.error('yelpSearch Error', err.message));
});

app.post('/hotels', (req,res) => {
  let headers = {
    Authorization: `Bearer ${ApiKeys.homeAwayApiToken.access_token}`
  }

  let search = 'https://ws.homeaway.com/public/search?q=San+Francisco+US&pageSize=15&locale=en'

  request({
    uri: search,
    method: 'GET',
    headers: headers
  }, (error,response,body) => {
    let listings = JSON.parse(body).entries;
    if (error) {
      console.log('+======ERROR======+', error)
    } else {
      var entries = [];
      listings.forEach((item,index) => {
        let entry = {};
        entry.name = item.headline;
        entry.accommodation = item.accommodation;
        entry.thumbnail = item.thumbnail.secureUri;
        entry.price = item.priceQuote;
        entries.push(entry);
      })
      res.status(201).send(entries);
    }
  })
})

app.get('/weather', (req, res) => {
  // const location = encodeURIComponent(req.query.location);
  const location = req.query.location;
  // const location = 'San Francisco'
  console.log('location', location);
  const openWeatherApiKey = ApiKeys.openWeatherApiKey;
  const apiUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily';
  // const test = 'api.openweathermap.org/data/2.5/weather?zip=94040,us'

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

app.post('/shows', (req,res) => {
  let body = req.body;
  let queryLink = `https://www.eventbriteapi.com/v3/events/search/?q=${body.query}&sort_by=best&location.address=${body.location}&token=${ApiKeys.eventBriteToken}`;
  request({
    uri: queryLink,
    method: 'GET',
  }, (error,response,body) => {
    body = JSON.parse(body).top_match_events;
    let shows = [];
    if (error) {
      throw error;
    } else {
      for (let i = 0; i < body.length; i++) {
        let event = {};
        event.name = body[i].name.text;
        event.date = body[i].start.local.slice(0,10);
        event.thumbnail = body[i].logo.original.url;
        shows.push(event);
      }
    }
    console.log(shows)
    res.status(201).send(shows);
  })
})

app.post('/saveTrip', (req, res) => {
  const body = req.body;
  const yelpID = body.destination.id;
  const name = body.destination.name;
  const longitude = body.destination.coordinates.longitude;
  const latitude = body.destination.coordinates.latitude;
  const displayAddress = body.destination.location.display_address;
  const address = body.destination.location.address1;
  const city = body.destination.location.city;
  const state = body.destination.location.state;
  const zipCode = body.destination.location.zip_code;
  const dateStart = body.startDate || null;
  const dateEnd = body.endDate || null;
  const imageUrl = body.destination.image_url;
  const informationUrl = body.destination.url;
  const user = req.user;

  util.yelpHours(yelpID)
    .then( (businessInfo) => {
      let hours;
      if ( businessInfo.indexOf('hmtl') > 0) {
        hours = null;
      } else {
        const parseBusinessInfo = JSON.parse(businessInfo);
        hours = parseBusinessInfo.hours;
        hours[0].open.forEach( (time, index) => {
          time.day = time.day === undefined ? util.formatDay(index) : util.formatDay(time.day);
          time.start = util.formatTime(time.start);
          time.end = util.formatTime(time.end);
        })
      }
      const trip = { yelpID, name, hours, longitude, latitude, displayAddress, address, city, state, zipCode, dateStart, dateEnd, imageUrl, informationUrl };
      return trip;
    })
    .then( (trip) => {
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
    })
    .catch(err => console.error('yelpHour Error', err.message));
});

app.post('/removeSavedTrip', (req, res) => {
  const body = req.body;
  const user = req.user;
  console.log('we are in removeSavedTrip');
  if (user) {
    User.findByIdAndUpdate(
      user._id,
      { $pull: { trips: body } },
      (error, result) => {
        if(error) {
          console.log(error);
        } else {
          res.sendStatus(201);
          console.log(result);
        }
      });
  } else {
    res.sendStatus(400);
    console.log('user was not signed in');
  }
});

app.post('/sendItinerary', (req, res) => {
  let message = req.body.message;
  zip.getEachNum({'Gary Wong': '+14156974834'}, message);
  res.sendStatus(201);
})

app.post('/zip', (req, res) => {
  let twiml = new twilio.TwimlResponse();
  let reply = req.body.Body;
  if (isNaN(Number(reply))) {
    Promise.resolve(zip.getShows(reply))
      .then((results) => {
        twiml.message(results);

        res.writeHead(200,{'Content-Type': 'text/xml'});
        res.end(twiml.toString());
      })
      .catch( (err) => {
        console.log('There was an error in getting the shows:', err.code, err.message );
      })
  } else {
    let zipCode = zip.cleanUserInputAsZipcode(reply);
    Promise.resolve((zip.getWeatherForecast(zipCode))
      .then( (results) => {
        twiml.message(results);

        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString());
      })
      .catch( (err) => {
        console.log('Got an error in getWeatherForecast:', err.code, err.message);
      })
    )
  }
})

app.post('/storePhoneNumber', (req, res) => {
   const phoneNumber = req.body.phoneNumber;
   const userID = '10155070393266758';
   User.findOne({ userID: userID }, (err, user) => {
    user.phoneNumber = phoneNumber;

    user.save(err => {
      if (err) {
        console.log('Got an error in storePhoneNumber', err);
      }
    })
   })
})


app.get('/*', (req, res) => {
  res.redirect('/');
});


module.exports = app;
