module.exports = function isAdmin (req, res, next) {
  if (req.user.role !== 'ADMIN') {
    const err = new Error('You are unauthorized!');
    err.status = 401;
    next(err);
  } else {
    next();
  }
}
