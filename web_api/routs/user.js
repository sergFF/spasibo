const omit = require('lodash.omit');
const authenticationMiddleware = require('../modules/auth/authorisationMiddleware');
const { table: User } = require('../../db_api/user');
const UserEntityDTO = require('../DTO/userEntityDTO');

const { updateUser, getUser, getAllUsers, createUser, updatePassword } = require('../modules/user');

const checkIsAdmin = require('../middlewares/checkIsAdmin');
const checkIsCurrentUser = require('../middlewares/checkIsCurrentUser');

module.exports = router => {
  router.put('/user/:id([0-9]+)', authenticationMiddleware(), checkIsAdmin, async (req, res, next) => {
    const userUpdates = req.body;
    try {
      const userEntityDTO = await updateUser(userUpdates, req.params.id);
      return res.status(200).json(userEntityDTO);
    } catch (e) {
      console.log(e);
      return next(e);
    }
  });
  router.get('/user/current_user', authenticationMiddleware(), checkIsCurrentUser, async (req, res, next) => {
    try {
      const userEntityDTO = getUser(req.user.id);
      return res.status(200).json(userEntityDTO);
    }
     catch (e) {
       next(e);
     }
  });
  router.put('/user/current_user', authenticationMiddleware(), checkIsCurrentUser, async (req, res, next) => {
    const userUpdates = req.body;
    delete userUpdates.isActive;
    delete userUpdates.passwordChange;
    try {
      const userEntityDTO = await updateUser(userUpdates, req.user.id);
      return res.status(200).json(userEntityDTO);
    } catch (e) {
      return next(e);
    }
  });
  router.get('/user', authenticationMiddleware(), checkIsAdmin, async (req, res, next) => {
    try {
      const usersList = await getAllUsers();
      return res.status(200).json(usersList);
    }
    catch (e) {
      console.log(e);
      next(e);
    }
  });
  router.post('/user', authenticationMiddleware(), checkIsAdmin, async (req, res, next) => {
    const userData = req.body;
    try {
      const userEntityDTO = await createUser(userData);
      return res.status(200).json(userEntityDTO);
    } catch (e) {
      console.log(e);
      return next(e);
    }
  });
  router.post('/user/current_user/changepassword', authenticationMiddleware(),
    async (req, res, next) => {
    try {
      const {old_password, password} = req.body;
      const userEntityDTO = await updatePassword(old_password, password, req.user.id);
      res.status(200).json(userEntityDTO);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
};
