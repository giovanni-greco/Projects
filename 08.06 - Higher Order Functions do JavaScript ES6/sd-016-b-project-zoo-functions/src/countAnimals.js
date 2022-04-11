const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpecie(animal) {
  // fetches specie obj by filtering either by just specie or both specie and sex
  const { specie, sex } = animal;
  const justSpecie = species.find((element) => element.name === specie);
  if (sex === undefined) {
    return justSpecie.residents.length;
  }
  const specieSex = justSpecie.residents.filter((element) => element.sex === animal.sex);
  return specieSex.length;
}

function countAnimals(animal) {
  const speciesObj = {};
  //count total number of residents of given specie
  if (animal === undefined) {
    species.forEach((specie) => {
      speciesObj[specie.name] = specie.residents.length;
    });
    return speciesObj;
  }
  return getSpecie(animal);
}

console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;
