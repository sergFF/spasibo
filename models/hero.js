module.exports = (sequelize, DataTypes) => {
  const hero = sequelize.define('hero', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    hero_name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    hero_surname: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT(),
      allowNull: true
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY
    },
    isActive: {
      type: DataTypes.BOOLEAN
    },
    createdAt: {
      type: DataTypes.DATEONLY
    },
    updatedAt: {
      type: DataTypes.DATEONLY
    }
  }, {
    timestamps: true
  });
  hero.associate = models => {
    hero.hasMany(models.report, {foreignKey: 'hero_id', sourceKey: 'id'});
  }

  return hero;
};
