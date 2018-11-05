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
module.exports = function errorHandler (err, req, res, next){
    const code = err.code || 500;
    const error = code === 500 ? 'Internal Server Error' : err.error;
    console.error(err.error || err.message);
>>>>>>> c605e3ce2b8b535998f6431894a2d0511c404893
    res.status(code).send({error});
};