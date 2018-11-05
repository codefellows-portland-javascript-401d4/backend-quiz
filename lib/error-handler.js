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
=======
'use strict';

module.exports = function errorHandler(err, req, res, next) { //eslint-disable-line
  const code = err.code || 500;
  const error = code === 500 ? 'Internal Server Error' : err.error;
  console.error(err.error || err.message);
  res.status(code).send({error});
>>>>>>> 91615f0c8506f5279326a1342e18458adba07de3
};