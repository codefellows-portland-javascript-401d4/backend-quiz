const express = require('express');
const app = express();
const img = require('./routes/img-router');
const errorHandler = require('./error-handler');

app.use('/images', img);
app.use(errorHandler);

module.exports = app;