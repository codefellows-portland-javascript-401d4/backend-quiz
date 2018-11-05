// eslint-disable-next-line no-unused-vars
module.exports = function errorHandler(err, req, res, next) {

  let code = 500, error = 'Internal Server Error';


  if(err.name === 'ValidationError' || err.name === "CastError") {
    code = 400;
    error = err.name;
  } else if (err.code) {
    code = err.code;
    error = err.error;
  } else {
    console.log(err);
  }

  res.status(code).send({error});

};
