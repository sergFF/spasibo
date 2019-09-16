const config = require('config');
console.log(config);
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
  host: config.db.host,
  dialect: 'postgres',
  define: { freezeTableName: 'true' },
  seederStorage: 'sequelize',
  logging: console.log,
  pool: { acquire: 20000 }
};

module.exports = {
  development,
  production
};
