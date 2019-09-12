function authenticationMiddleware () {
  return function (req, res, next) {
    console.log('Middleware');
    if (req.isAuthenticated()) {
      return next()
    }
    console.log('Error');
    // res.redirect('/')
    const err = new Error('Authorisation error');
    err.status = 505;
    return next(err);
  }
}

module.exports = authenticationMiddleware;
