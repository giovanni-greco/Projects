const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // given an ID fetches the first specie cared by the given employee and returns the oldest member of said specie
  const getEmployee = employees.filter((employee) => employee.id === id);
  const firstAnimalCared = getEmployee.find((element) => element.responsibleFor).responsibleFor[0];
  const findAnimal = species.find((specie) => specie.id === firstAnimalCared).residents;
  let oldestAnimal = findAnimal[0];

  findAnimal.forEach((element) => {
    if (element.age > oldestAnimal.age) {
      oldestAnimal = element;
    }
  });
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
