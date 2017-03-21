const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  userID: String,
  email: String,
  trips: [{
    destination: String,
    dateStart: String,
    dateEnd: String,
    mapUrl: String,
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
