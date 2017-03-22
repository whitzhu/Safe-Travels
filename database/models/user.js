const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  userID: String,
  email: String,
  trips: [{
    destination: String,
    address: String,
    city: String,
    state: String,
    zipCode: Number,
    dateStart: String,
    dateEnd: String,
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
