const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // spreads received Ids and filters for matching species
  const speciesById = species.filter((specie) => ids.includes(specie.id));
  return speciesById;
  // seu código aqui
}

module.exports = getSpeciesByIds;
