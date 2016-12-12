/** Created by Gloria Anholt on 11/28/16. **/

const express = require('express');
const app = express();
const image = require('./routes/image-router');


app.use('/image', image);

module.exports = app;