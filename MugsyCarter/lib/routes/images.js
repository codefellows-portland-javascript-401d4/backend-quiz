const bodyParser = require('body-parser').json();
const express = require('express');
const router = express.Router();
const Image = require('../model/image');

router

    .get('/', function(req, res, next){
	const query=req.query;
	Image.find(query)
        .then(images => res.send(images))
        .catch(next);

})

    .get('/:id', function (req, res, next) {
	    Image.find({_id: req.params.id})
            .then(image => res.send(image ))
            .catch(next);
})



    .post('/', bodyParser, function(req, res, next){
	new Image(req.body).save()
        .then(image => res.send(image))
        .catch(next);
});

module.exports=router;