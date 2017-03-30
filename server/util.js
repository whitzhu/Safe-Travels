const ApiKeys = require('../config/api-config');
const request = require('request');
const rp = require('request-promise');

module.exports = {
  yelpSearch: function(location, query, price) {

    const options = {
      uri: `https://api.yelp.com/v3/businesses/search?term=${query}&location=${location}${price}&sort_by=rating&limit=9`,
      headers: {
        Authorization: `Bearer ${ApiKeys.yelpApiToken.token}`,
      },
      method: 'GET',
    }

    return rp(options)
      .then(results => results)
      .catch( err => console.error('Yelp businesses search error', err.message));

  },

  yelpHours: function(yelp_id) {

    const options = {
      uri:  `https://api.yelp.com/v3/businesses/${yelp_id}`,
      headers: {
        Authorization: `Bearer ${ApiKeys.yelpApiToken.token}`,
      },
      method: 'GET',
      simple: false
    }

    return rp(options)
      .then( businessInfo => businessInfo)
      .catch( err => console.error('Yelp businesses hours search error', err.message));
  },

  formatTime: function(time) {
    let hours = parseInt(time.toString().substring(0,2));
    let mins = time.toString().substring(2,4);
    return `${ hours < 12 ? hours : hours %12 }:${mins} ${ hours < 12 ? 'AM' : 'PM'}`
  },

  formatDay: function(day) {
    const dayOfWeek = {
      0: 'Monday',
      1: 'Tuesday',
      2: 'Wednesday',
      3: 'Thursday',
      4: 'Friday',
      5: 'Saturday',
      6: 'Sunday',
    }
    return dayOfWeek[day];
  }
}
