const mongoose = require('mongoose');

const dbURI = 'mongodb://quiz:quiz@ds157187.mlab.com:57187/quiz';

mongoose.Promise = Promise;
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log( 'Mongoose default connection open to ', dbURI );
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ', err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log( 'Mongoose default connection disconnected through app terminataion');
    process.exit(0);
  });
});

module.exports = mongoose.connection;