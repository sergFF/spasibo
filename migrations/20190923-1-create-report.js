const config = require('config');

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('report', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateOfPayment: {
        type: Sequelize.DATEONLY
      },
      description: {
        type: Sequelize.STRING(256),
        allowNull: false
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      currency: {
        type: Sequelize.ENUM(['UAH', 'USD', 'EURO', 'RUR']),
        defaultValue: 'UAH'
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.fn('now')
      },
      hero_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'hero',
          key: 'id'
        },
        onDelete: 'cascade'
      }
    }, {
      timestamp: false
    }),
  down: queryInterface => queryInterface.dropTable('report')
};
