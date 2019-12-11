const config = require('config');

module.exports = (sequelize, DataTypes) => {
  const report = sequelize.define('report', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    dateOfPayment: {
      type: DataTypes.DATE
    },
    description: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    currency: {
      type: DataTypes.ENUM(...config.currency_list),
      defaultValue: 'UAH'
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      defaultValue: sequelize.fn('now')
    },
    hero_id: {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: true
  });
  report.associate = models => {
    report.belongsTo(models.hero, {foreignKey: 'hero_id', targetKey: 'id'});
  }

  return report;
};
