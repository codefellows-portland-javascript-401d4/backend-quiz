const mongoose = require('mongoose');
<<<<<<< HEAD
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/imageserver';
=======
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/images';
>>>>>>> 60f848b30a79db6bfe6ef5772cacc36b3192206b

mongoose.Promise = Promise;
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
<<<<<<< HEAD
    console.log('Mongoose default connection open to ' + dbURI);
});

mongoose.connection.on('error', err => {
    console.log('Mongoose default connection error: ' + err);
=======
    console.log('Mongoose connection open to', dbURI);
});

mongoose.connection.on('error', err => {
    console.log('Mongoose default connction error ', err);
>>>>>>> 60f848b30a79db6bfe6ef5772cacc36b3192206b
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', () => {
<<<<<<< HEAD
    mongoose.connection.close( () => {
=======
    mongoose.connection.close(() => {
>>>>>>> 60f848b30a79db6bfe6ef5772cacc36b3192206b
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

<<<<<<< HEAD
module.exports = mongoose.connection;
=======
module.exports = mongoose.connection;
>>>>>>> 60f848b30a79db6bfe6ef5772cacc36b3192206b
