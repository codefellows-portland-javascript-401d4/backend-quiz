<<<<<<< HEAD
module.exports = function errorHandler(err, req, res, next) {
    let code = 500;
    let error = 'Internal Server Error';

    if (err.name === 'ValidationError' || err.name === 'CastError') {
        code = 400;
        console.log(code, err);
    } else if (err.code) {
        console.log(err.code, err.message);
    } else {
        console.log(err);
    }

    res.status(code).send({error});
};
=======
'use strict'

module.exports = function errorHandler(err, req, res, next) {
  const code = err.code || 500;
  const error = code === 500 ? 'Internal server error' : err.error;

  console.error(err.error || err.message);
    response.status(code).send({ error });
    next();
};
>>>>>>> 579556a064ee8ff39aac05d6944ec51cbb65f690
