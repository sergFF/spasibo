const passport = require('passport');
const LocalStrategy = require('passport-local')
const { User } = require('../../../db_api/');

function initPassport() {

  passport.serializeUser(function(user, done) {
    user.password = null;
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  passport.use(new LocalStrategy(
    async function(username, password, done) {
      try {
        const user = await User.getUserByLogin(username);
        if (user && await user.verifyPassword(password) === true && user.isActive) {
          return done(null, user.get({ plain: true }));
        }
        console.log('Authorisation error');
        return done(null, false);
      } catch (e) {
        return done(e);
      }
    }));

return passport;
}
const authenticate = passport.authenticate('local', { session: true });

module.exports = {
  passport,
  initPassport,
  authenticate
};
