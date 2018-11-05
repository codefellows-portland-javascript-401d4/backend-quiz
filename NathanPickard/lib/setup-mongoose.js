const mongoose = require('mongoose');
<<<<<<< HEAD
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/imageserver';
=======
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/quiz';
>>>>>>> 594e2d8516cd3ee6018e864feca43317d1380db9

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
  console.log('Mongoose default connection open to ', dbURI);
});
mongoose.connection.on('error', (err) => {
  console.log('Mongoose default connection error ', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = mongoose.connection;
>>>>>>> 594e2d8516cd3ee6018e864feca43317d1380db9
