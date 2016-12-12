'use strict';

const mongoose = require('mongoose');

const dbURI = process.env.MONODB_URI || 'mongodb://localhost/images';

mongoose.Promise = Promise;
mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
  console.log('Mongoose default connection open to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disonnected', function() {
  console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose default connection disonnected through app termination');
  });
});

module.exports = mongoose.connection;