const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  userID: String,
  email: String,
  phoneNumber: String,
  trips: [{
    _id: false,
    yelpID: String,
    name: String,
    hours: Array,
    longitude: Number,
    latitude: Number,
    displayAddress: String,
    address: String,
    city: String,
    state: String,
    zipCode: Number,
    dateStart: String,
    dateEnd: String,
    imageUrl: String,
    informationUrl: String,
  }],
  planTrips:[{
    _id: false,
    yelpID: String,
    name: String,
    hours: Array,
    longitude: Number,
    latitude: Number,
    displayAddress: String,
    address: String,
    city: String,
    state: String,
    zipCode: Number,
    dateStart: String,
    dateEnd: String,
    imageUrl: String,
    informationUrl: String,
  }],
  planCalendar:[{
    date: String,
    trip: Object
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
