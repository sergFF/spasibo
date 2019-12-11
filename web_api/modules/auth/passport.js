const passport = require('passport');
const LocalStrategy = require('passport-local')
const { User } = require('../../../db_api/');

function initPassport() {

  passport.serializeUser(function(user, done) {
    user.password = null;
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    console.log(user);
    done(null, user);
  });

  passport.use(new LocalStrategy(
    async function(username, password, done) {
      try {
        const user = await User.getUserByLogin(username);
        if (!user) {
          return done(null, false);
        }
        if (!user.verifyPassword(password)) {
          return done(null, false);
        }
        return done(null, user.get({ plain: true }));
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
