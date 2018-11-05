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
module.exports = function errorHandler(err, req, res, next) { //eslint-disable-line no-unused-var
  let code = 500;
  let error = 'Internal Server Error';

  if(err.name === 'ValidatationError' || err.name === 'CastError') {
    console.log(err.errors);
    code = 400;
    error = err.errors.name.message;
  } else if (err.code) {
    code = err.code;
    error = err.error;
    console.log(err.code, err.error);
  } else {
    console.log(err);
  }

  res.status(code).send({error});

};
>>>>>>> 099f891bb729091df50495339348b14f5f31803e
