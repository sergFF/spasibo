const { Hero } = require('../../../db_api');

function addHero(hero) {
  return Hero.addHero(hero);
}
module.exports = addHero;
