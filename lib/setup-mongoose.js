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
mongoose.Promise = Promise;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/img-quiz';

mongoose.connect(dbURI);

mongoose.connection.on('connected', () => console.log('Mongoose default connection open to ', dbURI));
mongoose.connection.on('error', (err) => console.log('Mongoose default connection error: ', err));
mongoose.connection.on('disconnected', () => console.log('Mongoose default connection closed'));

process.on('SIGINT', () => {
  mongoose.connection.close( () => {
    console.log('Mongoose default connection closed through app termination');
    process.exit(0);
  });
});

module.exports = mongoose.connection;
>>>>>>> 53b5732e839980b009c1f9e78e186ed0a00f9e12
