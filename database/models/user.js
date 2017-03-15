const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  trip: [{
    destination: String,
    date: String,
    mapUrl: String,
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
