const express = require('express');
const app = express();
const imageRoutes = require('./routes');


app.use('/', imageRoutes);

module.exports = app;