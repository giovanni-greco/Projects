const data = require('../data/zoo_data');

const visitantes = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  // counts total visitors by age group
  const totalSenior = entrants.filter((entrant) => entrant.age >= 50);
  const totalKids = entrants.filter((entrant) => entrant.age <= 17);
  const totalAdults = entrants.filter((entrant) => entrant.age >= 18 && entrant.age <= 49);
  const totalEntrants = {
    child: totalKids.length,
    adult: totalAdults.length,
    senior: totalSenior.length,
  };
  return totalEntrants;
}

function calculateEntry(entrants) {
  // if entrants is truthy calculates the total paying price of all visistor
  if (!entrants || (typeof entrants === 'object' && Object.keys(entrants).length === 0)) {
    return 0;
  }
  const totalEntrants = countEntrants(entrants);
  const totalPriceChild = totalEntrants.child * 20.99;
  const totalPriceAdult = totalEntrants.senior * 24.99;
  const totalPriceSenior = totalEntrants.adult * 49.99;

  return totalPriceAdult + totalPriceChild + totalPriceSenior;
}

console.log(calculateEntry(visitantes));

module.exports = { calculateEntry, countEntrants };
