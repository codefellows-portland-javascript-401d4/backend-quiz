const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser').json();

const images = require('./imageRoutes');

const path = require('path');
const publicDir = path.join(__dirname, './');

const app = express();

//home route
app.use(express.static(publicDir));
const indexHtml = path.join(publicDir, 'index.html');

//image routes
app.use('/images', images);

//default route
app.get('*', function(req, res) {
  res.sendFile(indexHtml);
});

module.exports = app;