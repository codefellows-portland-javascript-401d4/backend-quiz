const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');

router
  .post('/', bodyParser, (req, res, next) => {
    const category = req.body.category;
    console.log(category);
    if(category === 'animals' || category === 'food' || category === 'places') {
      new Image(req.body).save()
        .then(saved => res.send(saved))
        .catch(next);
    } else {
      throw {
        code: 400,
        error: 'Invalid category given'
      };
    };
  })

  .get('/', (req, res, next) => {
    Image.find({})
      .then(images => res.send(images))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Image.findById(req.params.id)
      .then(image => res.send(image))
      .catch(next);
  });

module.exports = router;


