const config = require('config');
const db_config = {
  username: config.db.user,
  password: config.db.password,
  host: config.db.host,
  database: config.db.database,
  dialect: 'postgres',
  define: { freezeTableName: 'true' },
  seederStorage: 'sequelize',
  port: config.db.port,
  logging: console.log,
  pool: { acquire: 20000 }
};

module.exports = {
  development: db_config,
  production: db_config
};
