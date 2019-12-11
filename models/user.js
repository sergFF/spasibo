const ROLES = require('../constants/roles');
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('site_user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    fullName: {
      type: DataTypes.STRING(45)
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    login: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM(ROLES.ADMIN, ROLES.USER),
      defaultValue: ROLES.USER
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    passwordChange: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    timestamps: true
  });
  user.prototype.verifyPassword = function (password) {
    return password === this.password;
    }
  return user;
};
