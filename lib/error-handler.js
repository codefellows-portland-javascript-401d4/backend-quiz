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
module.exports = function errorHandler(err, req, res, next) { //eslint-disable-line
  err.code = err.code || 500;
  err.message = err.message || 'INTERNAL SERVER ERROR';

  if(err.name === 'SyntaxError' || err.name === 'ValidationError') {
    err.code = 400;
    err.message = 'INVALID DATA INPUT';
  }

  if(err.name === 'CastError') {
    err.code = 404;
    err.message = 'RESOURCE NOT FOUND';
  }

  console.error(err.code, err.message);
  res.status(err.code);
  res.send(`${err.code} ERROR, ${err.message}!`);
};
>>>>>>> e3f0f3062577238796b53f09ce241ae602b88c33
