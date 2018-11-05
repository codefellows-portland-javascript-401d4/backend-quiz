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
=======
    const knownError = err.code;
    const toLog = knownError ? `${error.code}: ${err.error}` : err;
    console.error(toLog);

    const code = err.code || 500;

    console.error(err.error || err.message);

    const error = code === 500 ? 'Internal Server Error' : err.error;
    res.status( code ).send({ error });
>>>>>>> 594e2d8516cd3ee6018e864feca43317d1380db9
};