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

=======
module.exports = function(err, req, res, next) { //eslint-disable-line
    const code = err.code || 500;
    const error = code === 500 ? 'Internal Server Error' : err.error; //if code is 500, then inteneral server err, else err.error
    console.log(err.error || err.message);
>>>>>>> 2b788263898ad56d5c57ac57071f20578e82ffdf
    res.status(code).send({error});
};