module.exports = (sequelize, DataTypes) => {
  const country = sequelize.define('country', {
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
      type: DataTypes.ENUM('ADMIN', 'USER'),
      defaultValue: 'USER'
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
  return country;
};
