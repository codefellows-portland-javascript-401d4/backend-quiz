const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI;

mongoose.Promise = Promise;
mongoose.connect(dbURI);

//success
mongoose.connection.on('connected', function () {
  console.log('default connection open to ' + dbURI);
});

//error on connection
mongoose.connection.on('error', function (err) {
  console.log('default connection error ' + err);
});

//on disconnect
mongoose.connection.on('disconnected', function () {
  console.log('default disconnection');
});

//node ends, so close mongoose
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('default disconnect thru app termination');
    process.exit(0);
  });
});

module.exports = mongoose.connection;