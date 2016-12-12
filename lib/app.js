const express = require('express');
const app = express();
const morgan = require('morgan')

const router = require('./routes');
const errorHandler = require('./error-handler');

app.use(morgan('dev'));

app.use('/api', router);

app.use(errorHandler);

module.exports = app;