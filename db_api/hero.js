const { hero: Hero } = require('../models/');

function getHero(id) {
  return Hero.findByPk(id);
}
function addHero(data){
 return Hero.create(data);
}

module.exports = {
  table: Hero,
  getHero,
  addHero
}
