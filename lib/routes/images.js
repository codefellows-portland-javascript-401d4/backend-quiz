const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser').json();

const Image = require('../models/image');

router
  .post('/', (req, res, next) => {

    new Image(req.body).save()
    .then(image => res.send(image))
    .catch(err => {
      next(err);
    });
  });