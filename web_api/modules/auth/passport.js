const passport = require('passport');
const LocalStrategy = require('passport-local');

function initPassport() {
  function findUser(user) {
    return { username: 'user-1' }
  };

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  passport.use(new LocalStrategy(
    function(username, password, done) {
      console.log('CASE');
      const user = findUser(username);
      // if (err) {
      //   return done(err);
      // }
      if (!user) {
        return done(null, false);
      }
      // if (user.verifyPassword(password)) {
      //   return done(null, false);
      // }
      return done(null, user);
    }));

return passport;
}
const authenticate = passport.authenticate('local', { session: true });

module.exports = {
  passport,
  initPassport,
  authenticate
};
