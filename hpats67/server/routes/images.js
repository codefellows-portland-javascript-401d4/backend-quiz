const express = require('express');
const router = express.Router();
const Image = require('../models/image');
const bodyParser = require('body-parser').json();

//my api is defined as the routes and what they do:
module.exports = router

.get('/', (req, res, next) => {
  const query = {};
  if(req.query.name) query.name = req.query.name;

  Image.find(query)
    .select('title category')
    .populate({
      path: 'title',
      select: 'category'
    })
    .lean()
    .then(data => res.send(data))
    .catch(err => {
      console.log('error getting all images');
      console.log('err: ', err);
      next(err);
      res.send([]);
    });
})

.get('/:id', (req, res, next) => {
  let id = req.params.id;
  Image.find(id)
    .select('title category description url')
    // .populate({
    //   path: 'title',
    //   select: 'category'
    // })
    .lean()
    .then(data => res.send(data))
    .catch(err => {
      console.log('error getting specific id');
      console.log('err: ', err);
      next(err);
      res.status(err.code || 400);
    });
})
  .post('/', bodyParser, (req, res, next) => {
    new Image(req.body)
    .save()
    .then(result => res.json(result))
    .catch(err => {
      res.status(err.code || 400);
      next(err);
    });
  });

  // TODO: GET to /images?category=animals:
    //use querystring module
