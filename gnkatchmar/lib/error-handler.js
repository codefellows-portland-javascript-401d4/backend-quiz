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
module.exports = function errorHandler(err, req, res, next) { // eslint-disable-line no-unused-var
  const code = err.code || 400;
  const error = code === 400 ? 'Bad Request!' : err.error;
  console.error(err.error || err.message);
  res.status( code ).send({ error });
>>>>>>> 8baec268884e7a8dd86daf82c6b89b3b4725dc13
};