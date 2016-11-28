/** Created by Gloria Anholt on 11/28/16. **/

const express = require('express');
const router = express.Router();

router
  .post('/', (req, res, next => {}))
  .get('/:id', (req, res, next => {}))
  .get('/', (req, res, next => {})); // handle query strings or not here?


module.exports = router;