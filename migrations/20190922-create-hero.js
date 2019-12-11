module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('hero', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hero_name: {
        type: Sequelize.STRING(256),
        allowNull: false
      },
      hero_surname: {
        type: Sequelize.STRING(256),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT(),
        allowNull: false
      },
      isActive: {
        type: Sequelize.BOOLEAN
      },
      dateOfBirth: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        type: Sequelize.DATEONLY
      },
      updatedAt: {
        type: Sequelize.DATEONLY
      }
    }),
  down: queryInterface => queryInterface.dropTable('hero')
};
