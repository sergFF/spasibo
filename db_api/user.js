const { site_user: User } = require('../models/');

function getUserByLogin (login, options = {}) {
  return User.findOne({
    where: { login }
  }
    // ...options
  );
}

module.exports = {
  table: User,
  getUserByLogin
}
