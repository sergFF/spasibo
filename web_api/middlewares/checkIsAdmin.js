module.exports = function isAdmin (req, res, next) {
  if (req.user.role !== 'ADMIN') {
    const err = new Error('Authorisation error');
    err.status = 505;
    next(err);
  } else {
    next();
  }
}
