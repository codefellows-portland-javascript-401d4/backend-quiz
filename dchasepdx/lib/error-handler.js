module.exports = function errorHandler(err, req, res, next) {
<<<<<<< HEAD
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
  const code = err.code || 500;
  const error = code === 500 ? 'Internal server error' : err.message;
  console.error(err.message || err.error);
  res.status(code).send({error});
};

>>>>>>> 4dada106c578a0c8e8db797125f5dda814fd400d
