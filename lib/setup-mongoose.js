const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/images';

mongoose.Promise = Promise;
mongoose.connect(dbURI);

module.exports = mongoose.connection;