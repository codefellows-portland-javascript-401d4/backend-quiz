module.exports = function errHandle (err, req, res, next) {
  const code = err.code || 500;
  const error = code === 500 ? 'oops, there seems to be a problem with the server' : err.error;
  console.error(err.error || err.message);
  res.status(code).send({error});
};