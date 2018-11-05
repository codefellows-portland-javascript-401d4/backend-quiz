<<<<<<< HEAD
const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
const images = require('./routes/route');

app.use('/images', images);
app.use(errorHandler);

module.exports = app;
=======

const express = require('express');
const morgan = require('morgan');
const errorHandler = require('./errorHandler');

const images = require('./routes/images');

const app = express();

app.use(morgan('dev'));

app.use('/images', images);

app.use(errorHandler);

module.exports = app;
>>>>>>> eef839e7ef70d03b76e21694f172e250725bf2e6
