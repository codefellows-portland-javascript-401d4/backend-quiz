'use strict';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');

router
  .get('/images', (req, res, next) => {
    const query = {};

    if(req.query.title) query.title = req.query.title;

    Image.find()
      .select('title description category url')
      .populate({
        path: 'categoryId',
        select: 'name'
      })
      .lean()
      .then(images => res.send(images))
      .catch(next);
  })

  .get('/images/:id', (req, res, next) => {
    Image.findById(req.params.id)
      .select('title description category url')
      .then(image => res.send(image))
      .catch(next);
  })

  .get('/images?category=animals', (req, res, next) => {
    Image.find({ category: req.params.name })
      .then(images => res.send(images))
      .catch(next);
  })

  .post('/images', bodyParser, (req, res, next) => {
    new Image(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  });

  module.exports = router;
