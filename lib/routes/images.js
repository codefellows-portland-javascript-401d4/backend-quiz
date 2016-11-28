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

  .post

