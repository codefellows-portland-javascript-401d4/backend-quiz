const mongoose = require('mongoose');
<<<<<<< HEAD
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/imageserver';
=======

const dbURI = 'mongodb://quiz:quiz@ds157187.mlab.com:57187/quiz';
>>>>>>> 063165c9b04e651970de07b9d0597c5377db308f

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
>>>>>>> 063165c9b04e651970de07b9d0597c5377db308f
