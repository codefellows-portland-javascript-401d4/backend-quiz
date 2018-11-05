const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Img = require('../models/img');

router
  .post('/', bodyParser, (req, res, next) => {
    // if (req.body.category !== 'animals' || 'food' || 'places') {
    //   throw {code: 400, message: 'category must be animals, food, or places'} ;
    // } else {
    new Img(req.body).save()
    .then(saved => res.send(saved))
    .catch(() => next({code: 400, message: 'Bad request'}));
  })

  .get('/', (req, res, next) => {
    const query = {};
    if(req.query.category === 'food' || req.query.category === 'animals' || req.query.category === 'places') {
      query.category = req.query.category;
    }
    else{next({code: 400, message: 'Bad request'});};

    Img.find(query, '_id title category')
    .then(imgs => res.send(imgs))
    .catch(() => next({code: 400, message: 'Bad request'}));
  })

  .get('/:id', (req, res, next) => {
    Img.findById(req.params.id)
    .then(img => res.send(img))
    .catch(() => next({code: 404, message: 'Resource not found'}));
  });

module.exports = router;