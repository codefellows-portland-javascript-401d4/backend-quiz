const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
const images = require('./routes/route');

app.use('/images', images);
app.use(errorHandler);

module.exports = app;