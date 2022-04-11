const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// map all employees
const getEmployees = () => employees.map((employee) => ({
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: species.filter((specie) => employee.responsibleFor.includes(specie.id))
    .map((specie) => specie.name),
  locations: species.filter((specie) => employee.responsibleFor.includes(specie.id))
    .map((specie) => specie.location),
}));

const fetchEmployeeMap = getEmployees();

// finds single employee in fetchEmployeeMap by Name 
const singleEmployee = (empName) => {
  const result = fetchEmployeeMap.find((employee) => employee.fullName.includes(empName.name));
  if (result === undefined) {
    throw new Error('Informações inválidas');
  }
  return result;
};

// finds single employee in fetchEmployeeMap by ID
const singleEmployeeById = (empId) => {
  const result = fetchEmployeeMap.find((employee) => employee.id === empId.id);
  if (result === undefined) {
    throw new Error('Informações inválidas');
  }
  return result;
};

function getEmployeesCoverage(obj) {
  // seu código aqui
  if (!obj) return getEmployees();
  if (obj.id) return singleEmployeeById(obj);
  if (obj.name) return singleEmployee(obj);
}

console.log(getEmployees());

module.exports = getEmployeesCoverage;
