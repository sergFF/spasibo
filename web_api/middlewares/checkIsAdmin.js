module.exports = function isAdmin (req, res, next) {
  if (req.user.role !== 'ADMIN') {
    const err = new Error('You are unauthorized!');
    err.status = 403;
    next(err);
  } else {
    next();
  }
}
