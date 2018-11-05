<<<<<<< HEAD
const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
const images = require('./routes/route');

app.use('/images', images);
=======
'use strict';

const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
const images = require('./routes/images');

app.use('/images', images);

>>>>>>> 91615f0c8506f5279326a1342e18458adba07de3
app.use(errorHandler);

module.exports = app;