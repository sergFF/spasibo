const config = require('config');
const log = require('../utils/logger');
const development = {
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

const production = {
  use_env_variable: "DATABASE_URL",
  define: { freezeTableName: 'true' },
  logging: log.info
};

module.exports = {
  development,
  production
};
