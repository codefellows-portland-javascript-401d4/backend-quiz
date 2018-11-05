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
module.exports = function errorHandler(err, req, res, next) {// eslint-disable-line no-unused-vars
  const code = err.code || 500;
  const error = code === 500 ? 'Internal server error' : err.error; // eslint-disable-line no-unused-vars
  res.status(code).send({error});
>>>>>>> 5cff8fdbfbfa14c72106a155fd8697d186c19be4
};