const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/fleas';

mongoose.Promise = Promise;
mongoose.connect(dbURI);

mongoose.connection.on('connected'),
function() {
  console.log('mongoose default connection open to ' + dbURI);
});
