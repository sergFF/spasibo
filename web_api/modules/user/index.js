const UserEntityDTO = require('../../DTO/userEntityDTO');
const { table: User } = require('../../../db_api/user');

const updateUser = async (userUpdates, id) => {
  try {
    const userEntity = await User.findByPk(id);
    userEntity.update(userUpdates);
    console.log(userEntity.get('password'));
    await userEntity.save();
    console.log(userEntity.get('password'));
    return new UserEntityDTO(userEntity, ['password']);
  } catch (e) {
    console.log(e);
    throw e;
  }
}

const getUser = async (id) => {
  const userEntity = await User.findByPk(id);
  return new UserEntityDTO(userEntity);
}

const getAllUsers = () => {
  return User.findAll().map(user => new UserEntityDTO(user, ['password']));
}

const createUser = async (userData) => {
  const userEntity = await User.create(userData);
  return new UserEntityDTO(userEntity);
}

const updatePassword = async (oldPassword, password, id) => {
  const userEntity = await User.findByPk(id);
  if (await userEntity.verifyPassword(oldPassword)) {
    userEntity.update({ password, passwordChange: false });
    await userEntity.save();
    return new UserEntityDTO(userEntity);
  }
  const error = Error('PASSWORD_FAILS');
  error.status = 505;
  throw error;
}
module.exports = {
  updateUser,
  getUser,
  getAllUsers,
  createUser,
  updatePassword
}
