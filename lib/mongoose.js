/** Created by Gloria Anholt on 11/28/16. **/

const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI;
mongoose.Promise = Promise;

mongoose.connect(dbURI);

mongoose.connection.on('connection', () => {
  console.log('Mongoose started on ', dbURI);
});

mongoose.connection.on('error', () => {
  console.error('Mongoose error: ', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose process killed by client');
    process.exit(0);
  });
});


module.exports = mongoose.connection;