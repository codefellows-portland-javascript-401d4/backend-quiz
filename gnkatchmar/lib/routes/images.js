const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');

router
     .post('/images', bodyParser, (req, res, next) => {
       new Image(req.body).save()
            .then(saved => res.send(saved ))
            .catch(next);
     })
			.get('/images', (req, res, next) => {
  Image.find()
            .select('title category')
            .lean()
            .then(images => res.send(images))
            .catch(next);
})
			.get('/images/:id', (req, res, next) => {
  Image.findById(req.params.id)
       .select('title category description url')
            .lean()
            .then(images => res.send(images))
            .catch(next);
});


//Return 404 if id doesn't exist


// Retrieve list of images in one category

// GET to /images?category=animals:

// [
//     { _id: "123abc", title: "titleOne", category: "animals" },
//     { _id: "456def", title: "titleTwo", category: "animals" }
// ]
// Same fieldset as normal GET of images
// Return empty array if no images
// If category not one of three defined categories, return 400

module.exports = router;