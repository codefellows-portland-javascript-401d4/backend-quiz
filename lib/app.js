const express = require('express');
const app = express();
const errorHandler = require('./errorHandler');
const images = require('./routes/images');

app.use('/images', images);
app.use(errorHandler);

module.exports = app;