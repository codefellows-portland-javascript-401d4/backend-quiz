const mongoose = require('mongoose');
<<<<<<< HEAD
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/imageserver';
=======
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/images';
>>>>>>> 8baec268884e7a8dd86daf82c6b89b3b4725dc13

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
module.exports = mongoose.connection;
>>>>>>> 8baec268884e7a8dd86daf82c6b89b3b4725dc13
