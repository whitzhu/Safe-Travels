import mongoose from 'mongoose';

mongoose.connection('mongodb://localhost');

const db = mongoose.connect();

db.on('error', console.error.bind('console', 'error connecting mongoose'));
db.once('open', () => {
  console.log('success connecting mongoose');
});

module.exports = db;
