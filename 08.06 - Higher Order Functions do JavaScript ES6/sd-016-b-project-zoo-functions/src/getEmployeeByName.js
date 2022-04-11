const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(nome) {
  // if nome is a string finds and returns employee object
  if (nome === '' || nome === null || nome === undefined) {
    return {};
  }
  const fEmp = employees.find((emp) => emp.firstName === nome || emp.lastName === nome);
  return fEmp;
}

module.exports = getEmployeeByName;
