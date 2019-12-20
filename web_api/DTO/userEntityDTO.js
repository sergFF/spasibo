const HIDDEN_FIELDS = ['password', 'createdAt', 'updatedAt'];
class UserEntityDTO {
  constructor(UserEntity, hiddenFields = HIDDEN_FIELDS) {
    Object.keys(UserEntity.get({ plain: true })).forEach(
      key => {
        if (hiddenFields.indexOf(key) === -1) {
          this[key] = UserEntity[key];
        }
      }
    )
  }
}

module.exports = UserEntityDTO;
