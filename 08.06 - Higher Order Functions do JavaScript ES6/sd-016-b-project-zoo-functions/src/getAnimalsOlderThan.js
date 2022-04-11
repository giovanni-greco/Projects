const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // fetches animals older than a given age
  const animals = species.filter((specie) => specie.name === animal)[0]
    .residents;
  const ageMap = animals.map((element) => element.age);
  return ageMap.every((element) => element >= age);
}

console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
