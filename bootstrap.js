/*
* Creates the databases required by the application. This will also drop any existing
* databases before it creates them, so this should ONLY BE USED FOR TEST DEPLOYMENTS.
*/
const logger = require('./utils/logger');

const pg = require('pg');
const config = require('config');

let database = config.db.database;

const  options = {
    user: config.db.user,
    password: config.db.password,
    host: config.db.host,
    database: 'postgres',
    port: config.db.port
  };
const resetDB = config.db.reset_db;

const conn = 'postgres://postgres:password123@localhost:54320/';

if (!resetDB || resetDB == 0) {
  logger.warn('DB will not be recreated!');
  return;
}

logger.info(`Connecting to postgres with credentials:`);
console.log(options);
const pool = new pg.Pool(options);

try {
  (async function() {
    const client = await pool.connect();
    const drop = await client.query(`DROP DATABASE IF EXISTS ${database}`);
    logger.info('Drop DB success...');
    await client.query(`CREATE DATABASE ${database}`);
    logger.info('Create DB success...');
    await client.end();
  })();
} catch (e) {
  logger.error(e);
  throw e;
}

