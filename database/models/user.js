const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  userID: String,
  email: String,
  trips: [{
    _id: false,
    destination: String,
    address: String,
    city: String,
    state: String,
    zipCode: Number,
    dateStart: String,
    dateEnd: String,
    imageUrl: String,
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
