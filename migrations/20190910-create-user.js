const config = require('config');

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('site_user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING(45)
      },
      email: {
        type: Sequelize.STRING(256),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(256),
        allowNull: false
      },
      login: {
        type: Sequelize.STRING(256),
        allowNull: false
      },
      role: {
        type: Sequelize.ENUM('ADMIN', 'USER'),
        defaultValue: 'USER'
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      passwordChange: {
        type: Sequelize.BOOLEAN
      }
    }),
  down: queryInterface => queryInterface.dropTable('site_user')
};
