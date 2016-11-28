const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/images';

mongoose.Promise = Promise;
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {console.log('mongoose default connection open to ' + dbURI);});

module.exports = mongoose.connection;
