const mongoose = require('mongoose');
<<<<<<< HEAD
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/imageserver';
=======
const dbURI = 'mongodb://localhost/quiz';
>>>>>>> 4dada106c578a0c8e8db797125f5dda814fd400d

mongoose.Promise = Promise;
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
<<<<<<< HEAD
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
  console.log(`Mongoose default connection open to ${dbURI}`);
});

mongoose.connection.on('error', err => {
  console.log(`Mongoose default connection error: ${err}`);
});

mongoose.connection.on('disconneccted', () => {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close( () => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = mongoose.connection;
>>>>>>> 4dada106c578a0c8e8db797125f5dda814fd400d
