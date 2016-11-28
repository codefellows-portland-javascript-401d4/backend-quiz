const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('./imageModel');

router
  .get('/', (req, res, next) => {
    Image.find({})
    .then((images) => res.send(images))
    .catch(next);
  })

  .get('/:id', (req, res, next) => {
    let imageId = req.params.id;
    Image.findById(imageId).lean()
    .then((images) => {
      res.send(images);
    })
    .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    new Image(req.body).save()
      .then((saved) => {
        res.send(saved);
      })
      .catch(next);
  });


module.exports = router;
