const { omit } = require('lodash');
const passportHelper = require('../modules/auth/passport');
const authenticationMiddleware = require('../modules/auth/authorisationMiddleware');
const addHero = require('../modules/hero/add-hero')


module.exports = router => {
  router.post('/hero', authenticationMiddleware(), (req, res, next) => {
    console.log(req.body);
    try {
      addHero(req.body);
    } catch (e) {
      console.log(e);
      return next(e);
    }
    return res.status(200).send({ok: true});
  });
};
