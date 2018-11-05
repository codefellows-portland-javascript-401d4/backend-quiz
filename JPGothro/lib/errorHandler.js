module.exports = function errorHandler (err, req, res, next) {

    const retCode = err.code || 500;
    const retError = retCode === 500 ? 'Internal Server Error' : err.error;
    console.error(err.error || err.message);
    res.status(retCode).send({retError});

};
