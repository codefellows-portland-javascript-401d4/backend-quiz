const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');


router
  .post('/', bodyParser, (req, res, next) => {
    new Image(req.body).save()
      .then(newImg => res.send(newImg))
      .catch(next);
  });

module.exports = router;