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
      .catch( err => console.error('Yelp businesses id search error', err.message));
  },
}
