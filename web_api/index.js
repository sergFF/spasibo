const fs = require('fs');
const path = require('path');
const router = require('express')
  .Router();

const routesDir = `${path.join(__dirname, './routs')}`;
/* eslint-disable */
fs
  .readdirSync(routesDir)
  .forEach(file => require(path.join(routesDir, file))(router));
/* eslint-enable */

module.exports = router;
