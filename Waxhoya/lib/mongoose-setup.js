const mongoose = require('mongoose');
const mongoAddress = 'mongodb://newuser:newpass@ds157187.mlab.com:57187/quizdata';

mongoose.Promise = Promise;
mongoose.connect(mongoAddress);
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected to: ', mongoAddress);
});

mongoose.connection.on('error', () => {
    console.log('Mongoose is getting an error: ', err);
});

process.on('SIGINT', () => {
    console.log('Disconnected from MongoDB');
    process.exit(0);
});
module.exports = mongoose.connection;
