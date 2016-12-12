const express = require('express');
const app = express();

const errorHandler = require('./error-handler');

const images = require('./routes/images');
const favicon = require('./favicon');
const notFound = require('./not-found');

app.get('/favicon.ico', favicon);
app.use('/api/images', images);

app.use('*', notFound);

app.use(errorHandler);

module.exports = app;
