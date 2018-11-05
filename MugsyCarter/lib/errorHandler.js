module.exports = function errorHandler(err, req, res, next){ //eslint-disable-line 
//eslint-disable no-unused-vars
	console.log(err);
	var code = 500;
	var error = 'Internal Server Error';

	if (err.name === 'ValidationError' || 'CastError'){
		console.log('error is ', err);
		code = 400;
		error = err.errors.name.message;
	}
	else {
		console.log('error is ', err);
	}

	res.status(code).send({ error });
};