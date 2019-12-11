const omit = require('lodash.omit');
const authenticationMiddleware = require('../modules/auth/authorisationMiddleware');
const { table: User } = require('../../db_api/user');

const checkIsAdmin = require('../middlewares/checkIsAdmin');

module.exports = router => {
  router.put('/user/:id', authenticationMiddleware(), checkIsAdmin, async (req, res, next) => {
    const userUpdates = req.body;
    try {
      const userEntity = await User.findByPk(req.params.id);
      userEntity.update(userUpdates);
      await userEntity.save();
      return res.status(200).json(userEntity);
    } catch (e) {
      console.log(e);
      return next(e);
    }
  });
  router.get('/user/current_user', authenticationMiddleware(), async (req, res, next) => {
    try {
      const userEntity = await User.findByPk(req.user.id, { raw: true });
      return res.status(200).json(omit(userEntity, ['password', 'createdAt', 'updatedAt']));
    }
     catch (e) {
       console.log(e);
       next(e);
     }
  });

};
