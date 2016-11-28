const express = require('express');
const app = express();
const errorHandler = require('./error-handler');

const imgs = require('./routes/imgs');

app.use('/images', imgs);
app.use(errorHandler);

module.exports = app;