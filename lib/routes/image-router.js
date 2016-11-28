/** Created by Gloria Anholt on 11/28/16. **/

const router = require('express').Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');


router
  .post('/', bodyParser, (req, res, next) => {
    console.log('in the post', req.body); })
  .get('/:id', (req, res, next) => {
    console.log('in the get', req); })
  .get('/', (req, res, next) => {
    console.log('in the get', req); });




module.exports = router;