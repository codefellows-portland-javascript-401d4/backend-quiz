const express = require('express');
const images = require('./routes/images');
const app = express();

app.use('/images', images);

module.exports = app;