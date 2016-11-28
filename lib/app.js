const express = require('express');
const images = require('./routes/images');
const errorHandler = require('./errorHandler');
const app = express();


app.use('/images', images);
app.use(errorHandler);

module.exports = app;