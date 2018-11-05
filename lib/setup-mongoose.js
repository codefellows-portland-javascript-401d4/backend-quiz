<<<<<<< HEAD
const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/imageserver';
=======
'use strict';

const mongoose = require('mongoose');

const dbURI = process.env.MONODB_URI || 'mongodb://localhost/images';
>>>>>>> 91615f0c8506f5279326a1342e18458adba07de3

mongoose.Promise = Promise;
mongoose.connect(dbURI);

<<<<<<< HEAD
mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection open to ' + dbURI);
});

mongoose.connection.on('error', err => {
    console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', () => {
    mongoose.connection.close( () => {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

module.exports = mongoose.connection;
=======
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
>>>>>>> 91615f0c8506f5279326a1342e18458adba07de3
