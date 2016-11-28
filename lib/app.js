
const express = require('express');
const morgan = require('morgan');
const errorHandler = require('./errorHandler');

const images = require('./routes/images');

const app = express();

app.use(morgan('dev'));

app.use('/images', images);

app.use(errorHandler);

module.exports = app;
