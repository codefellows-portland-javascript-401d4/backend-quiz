<<<<<<< HEAD
const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
const images = require('./routes/route');

app.use('/images', images);
app.use(errorHandler);

module.exports = app;
=======
'use strict';

const express = require('express');
const app = express();
const errorHandler = require('./error-handler');

const images = require('./routes/images');

app.use('/images', images);

app.use(errorHandler);

module.exports = app;
>>>>>>> 579556a064ee8ff39aac05d6944ec51cbb65f690
