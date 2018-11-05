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
  
  let code, error;

  if(err.name === 'ValidationError' || err.name === 'CastError') {
    console.log(err.errors);
    code = 400;
    error = err.errors.name.message;
  } else if (err.code) {
    code = err.code;
    error = err.error;
    console.log(err.code, err.error);
  } else {
    code = 500;
    error = 'Internal Server Error';
    console.log(err);
  }
  res.status(code).send({error});
}

module.exports = errorHandler;
>>>>>>> 75ea9a132a495596cdc2068fe63e5f6b78e7c70f
