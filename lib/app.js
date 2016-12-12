const express = require('express');
const app = express();
const images = require('./routes/images');
const errorHandler = require ('./error-handler');

app.use('/images', images);
app.use(errorHandler);

module.exports = app;