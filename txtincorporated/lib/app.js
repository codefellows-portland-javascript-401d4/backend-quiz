const express = require('express');
const app = express();
<<<<<<< HEAD
const errorHandler = require('./error-handler');
const images = require('./routes/route');

app.use('/images', images);
app.use(errorHandler);

module.exports = app;
=======

const errorHandler = require('./error-handler');

const images = require('./routes/images');
const favicon = require('./favicon');
const notFound = require('./not-found');

app.get('/favicon.ico', favicon);
app.use('/api/images', images);

app.use('*', notFound);

app.use(errorHandler);

module.exports = app;
>>>>>>> 5cff8fdbfbfa14c72106a155fd8697d186c19be4
