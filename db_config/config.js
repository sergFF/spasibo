const config = require('config');
console.log(process.env.NODE_ENV);
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
  use_env_variable: "DATABASE_URL"
};

module.exports = {
  development,
  production
};
