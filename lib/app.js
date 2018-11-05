const express = require('express');
const app = express();
<<<<<<< HEAD
const errorHandler = require('./error-handler');
const images = require('./routes/route');

app.use('/images', images);
app.use(errorHandler);

module.exports = app;
=======

const errorHandler = require('./error_handler');

// const Image = require('./models/image');

const images = require('./routes/images');

app.use('/api/images', images);


app.use(errorHandler);

module.exports = app;
>>>>>>> 30116cae9809cbd298750306e8a6010388644124
