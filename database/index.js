const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost');

const db = mongoose.connection;

db.on('error', console.error.bind('console', 'error connecting mongoose'));
db.once('open', () => {
  console.log('success connecting mongoose');
});

module.exports = db;
