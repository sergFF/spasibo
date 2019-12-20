const { omit } = require('lodash');
const passportHelper = require('../modules/auth/passport');
const authenticationMiddleware = require('../modules/auth/authorisationMiddleware');

module.exports = router => {
  router.post('/login', passportHelper.authenticate, (req, res) => {
    return res.status(200).send(omit(req.user, ['password', 'createdAt', 'updatedAt']));
  });
  router.post('/logout', (req, res) => {
    req.logOut();
    res.status(200).send({});
  });
};
