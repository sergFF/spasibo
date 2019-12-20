module.exports = function isCurrentUser (req, res, next) {
  if (req.user.id !== req.body.id) {
    const err = new Error('You are unauthorized!');
    err.status = 403;
    next(err);
  } else {
    next();
  }
}
