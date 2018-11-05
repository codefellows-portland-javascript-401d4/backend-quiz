const mongoose = require('mongoose');
<<<<<<< HEAD
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/imageserver';

mongoose.Promise = Promise;
mongoose.connect(dbURI);

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

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/testdb';

mongoose.Promise = Promise/
mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
  console. log('Mongoose default connection open to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose default connection error ' + err);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = mongoose.connection;
>>>>>>> 5cff8fdbfbfa14c72106a155fd8697d186c19be4
