const cr = require('bcrypt');
const ROLES = require('../constants/roles');

const hashPasswordHook = (instance, options) => {
  return new Promise((resolve, reject) => {
    if (!instance.changed('password')) return resolve(instance, options);
    cr.genSalt(10, function (err, salt) {
      if (err) {
        throw err
      } else {
          cr.hash(instance.get('password'), salt, function (err, hash) {
          if (err) return reject(err);
          instance.set('password', hash);
          return resolve(instance, options);
        });
      }
    })
  })
};

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
  user.prototype.verifyPassword = async function (password) {
    const result = await cr.compare(password, this.password);
    const p = await cr.hash(password, 10);
    return result;
  }
  user.beforeCreate(hashPasswordHook);
  user.beforeUpdate(hashPasswordHook);
  return user;
};
