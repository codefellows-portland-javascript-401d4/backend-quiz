/** Created by Gloria Anholt on 11/28/16. **/

const router = require('express').Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');


router
  .post('/', bodyParser, (req, res, next) => {
    if (!req.body.title || !req.body.description || !req.body.category || !req.body.url) {
      next({code: 400, error: 'All fields are required'});
    }
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
      .catch(err => {
        next({code: 404, error: err});
      });
  })
  .get('/', (req, res, next) => {
    if (req.query) {
      if (req.query === ('animals' || 'food' || 'places')) {
        Image.find({category: req.query.category})
          .then(imageResults => {
            if (imageResults.length < 1) {
              res.send([]);
            } else {
              res.send(imageResults);
            }
          })
          .catch(next);
      } else {  // if invalid query string, return an error
        next({code: 400, error: 'Invalid category'});
      }
    } else { // if no query string, grab all
      Image.find()
        .then(imageResults => {
          if (imageResults.length < 1) {
            res.send([]);
          } else {
            res.send(imageResults);
          }
        })
        .catch(next);
    }
  });




module.exports = router;