<<<<<<< HEAD
const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
const images = require('./routes/route');

app.use('/images', images);
app.use(errorHandler);
=======
/** Created by Gloria Anholt on 11/28/16. **/

const express = require('express');
const app = express();
const image = require('./routes/image-router');


app.use('/image', image);
>>>>>>> 0cf61ef1f879d1e77a0fa83f8ae62618bdaddc29

module.exports = app;