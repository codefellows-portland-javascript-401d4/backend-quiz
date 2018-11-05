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
function errorHandler(err, req, res, next) {
  const code = err.code || 500;
  const error = code === 500 ? 'Internal server error' : err.error;
  console.error(err.error || err.message);
  res.status(code).send({error});
}

module.exports = errorHandler;
>>>>>>> 53b5732e839980b009c1f9e78e186ed0a00f9e12
