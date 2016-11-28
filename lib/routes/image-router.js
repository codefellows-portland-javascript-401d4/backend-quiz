/** Created by Gloria Anholt on 11/28/16. **/

const router = require('express').Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');


router
  .post('/', bodyParser, (req, res, next) => {
    let image = new Image(req.body);
    return image.save()
      .then(saved => res.send('Saved' + saved))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Image.findById(req.params.id)
      .then(imageData => {
        res.send(imageData);
      })
      .catch(next);
  })
  .get('/', (req, res, next) => {
    if (req.query) {
      Image.find({ category: req.query.category })
        .then(imageResults => {
          res.send(imageResults);
        })
        .catch(next);
    } else {
      Image.find()
        .then(imageResults => {
          res.send(imageResults);
        })
        .catch(next);
    }
  });




module.exports = router;