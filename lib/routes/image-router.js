/** Created by Gloria Anholt on 11/28/16. **/

const router = require('express').Router();
const Image = require('../models/image');


router
  .post('/', (req, res, next) => { console.log('in the post', req) })
  .get('/:id', (req, res, next) => { console.log('in the get', req) })
  .get('/', (req, res, next) => { console.log('in the get', req) });




module.exports = router;