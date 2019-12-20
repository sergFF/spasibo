function authenticationMiddleware () {
  return function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    console.log('Auth middleware Error');
    // res.redirect('/')
    const err = new Error('Authorisation error');
    err.status = 401;
    return next(err);
  }
}

module.exports = authenticationMiddleware;
