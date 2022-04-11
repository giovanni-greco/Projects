const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  // returns true or false
  const managerOrNot = employees.some((employee) => employee.managers.includes(id));
  return managerOrNot;
}

function getRelatedEmployees(managerId) {
  // if managerId is true returns its full name
  if (isManager(managerId)) {
    const managed = employees.filter((employee) => employee.managers.includes(managerId));
    const managedMap = managed.map((managMap) => `${managMap.firstName} ${managMap.lastName}`);
    return managedMap;
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
