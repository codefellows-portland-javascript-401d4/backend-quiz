'use strict';

const express = require('express');
const router = express.Router(); //eslint-disable-line
const bodyParser = require('body-parser').json();
const Image = require('../models/image');

router
  .post('/', bodyParser, (req, res, next) => {
    new Image(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    const query = {};

    if(req.query.category) query.category = req.query.category;

    Image.find(query)
      .then(images => res.send(images))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Image.findById(req.params.id)
      .then(image => res.send(image))
      .catch(next);
  });

module.exports = router;