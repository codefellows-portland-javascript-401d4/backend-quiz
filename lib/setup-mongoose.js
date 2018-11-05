const mongoose = require('mongoose');
<<<<<<< HEAD
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/imageserver';
=======

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/images';
>>>>>>> 75ea9a132a495596cdc2068fe63e5f6b78e7c70f

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

mongoose.connection.on('error',function (err) {
  console.error( 'Mongoose default connection error: ', err );
});

mongoose.connection.on('disconnected', function () {
  console.log( 'Mongoose default connection disconnected' );
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log( 'Mongoose default connection disconnected through app termination' );
    process.exit(0);
  });
});

module.exports = mongoose.connection;
>>>>>>> 75ea9a132a495596cdc2068fe63e5f6b78e7c70f
